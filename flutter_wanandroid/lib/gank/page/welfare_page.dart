


import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:ycflutter/common/Constants.dart';
import 'package:ycflutter/gank/api/gank_api.dart';
import 'package:ycflutter/gank/model/gank_item.dart';
import 'package:ycflutter/gank/weight/page_gallery.dart';
import 'package:ycflutter/res/YcString.dart';
import 'package:ycflutter/utils/CommonUtils.dart';
import 'package:ycflutter/utils/EventBus.dart';
import 'package:ycflutter/utils/LogUtils.dart';
import 'package:ycflutter/utils/time_utils.dart';

class WelfarePage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new WelfarePageState();
  }
}

class WelfarePageState extends State<WelfarePage> with AutomaticKeepAliveClientMixin {

  bool _isLoading = true;
  List _items = [];
  int _page = 1;
  RefreshController _refreshController;
  bool isOneColumn = false;

  @override
  bool get wantKeepAlive => true;

  @override
  void initState() {
    super.initState();
    _refreshController = new RefreshController();
    initWelfareData();
    EventBus.singleton.on(Constants.updateGirl,(arg) {
      // do something
      LogUtils.showPrint("发送消息通知，设置");
      if (mounted) {
        setState(() {
          isOneColumn = !isOneColumn;
        });
      }
    });
  }

  @override
  void setState(fn) {
    super.setState(fn);
  }

  @override
  void dispose() {
    _refreshController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return new Container(
      color: Colors.white,
      child: new Stack(
        children: <Widget>[
          Offstage(
              offstage: _isLoading,
              child: SmartRefresher(
                controller: _refreshController,
                onRefresh: _onRefresh,
                onLoading: _onLoading,
                enablePullUp: true,
                child: GridView.builder(
                    gridDelegate: new SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: isOneColumn ? 1 : 2,
                      childAspectRatio: 2 / (isOneColumn ? 2 : 3),
                      crossAxisSpacing: 10.0,
                    ),
                    itemCount: _items?.length ?? 0,
                    padding: EdgeInsets.all(10),
                    itemBuilder: (BuildContext context, int index) {
                      var gankItem = _items[index];
                      return GestureDetector(
                        onTap: () {
                          Navigator.of(context).push(MaterialPageRoute(builder: (context) {
                            return GalleryPage([gankItem.url.replaceFirst("large", "mw690")], gankItem.desc);
                          }));
                        },
                        child: Padding(
                          padding: const EdgeInsets.only(bottom: 10.0),
                          child: _buildImageWidget(gankItem),
                        ),
                      );
                    }),
              )),
          Offstage(
            offstage: !_isLoading,
            child: Center(
              child: CupertinoActivityIndicator(),
            ),
          )
        ],
      ),
    );
  }


  Widget _buildImageWidget(gankItem) {
    return ClipRRect(
      borderRadius: BorderRadius.all(Radius.circular(10.0)),
      child: Stack(
        children: <Widget>[
          Positioned.fill(
              child: CachedNetworkImage(
                imageUrl: gankItem.url,
                fit: BoxFit.cover,
              )),
          Positioned(
              bottom: 0,
              child: Container(
                width: MediaQuery.of(context).size.width - 20,
                color: Colors.black26,
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  child: Padding(
                    padding: const EdgeInsets.only(left: 10.0),
                    child: Text(
                      TimeUtils.formatDateStr(gankItem.publishedAt),
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: 16,
                          fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ))
        ],
      ),
    );
  }


  void _onRefresh() async {
    _page = 1;
    var gankItems = await _getCategoryData();
    _refreshController.refreshCompleted();
    setState(() {
      _items = gankItems;
    });
  }

  void _onLoading() async {
    _page++;
    var gankItems = await _getCategoryData();
    _refreshController.loadComplete();
    setState(() {
      _items.addAll(gankItems);
    });
  }

  void initWelfareData() async {
    var gankItems = await _getCategoryData();
    setState(() {
      _items.addAll(gankItems);
      _isLoading = false;
    });
  }

  ///获取网络数据
  Future _getCategoryData() async{
    var categoryData = await GankApi.getCategoryData(YcString.WELFARE, _page);
    var gankItems = categoryData['results']
        .map<GankItem>((itemJson) => GankItem.fromJson(itemJson,
        category: CommonUtils.getLocale(context).gankWelfare))
        .toList();
    return gankItems;
  }

}









