


import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:ycflutter/gank/api/gank_api.dart';
import 'package:ycflutter/gank/weight/article_list_item.dart';

class ArticlePage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new ArticlePageState();
  }
}

class ArticlePageState extends State<ArticlePage> {

  int _page = 0;
  bool _isLoading = true;
  RefreshController _refreshController;
  var _articleItems = [];

  ArticlePageState(){
    //构造方法
  }

  @override
  void initState() {
    super.initState();
    _refreshController = new RefreshController();
    initArticleData();
  }

  @override
  Widget build(BuildContext context) {
    return new Stack(
      children: <Widget>[
        new SmartRefresher(
          controller: _refreshController,
          onRefresh: _onRefresh,
          onLoading: _onLoading,
          enablePullDown: true,
          enablePullUp: true,
          child: new ListView.builder(
            itemCount: _articleItems?.length ?? 0,
            itemBuilder: (context, index) => ArticleListItem(_articleItems[index]),
          ),
        ),
        Offstage(
          offstage: !_isLoading,
          child: Center(
            child: CupertinoActivityIndicator(),
          ),
        )
      ],
    );
  }

  void initArticleData() async{
    var result = await GankApi.getJueJinFlutterArticles(_page);
    List articleItems = result['d']['entrylist'];
    setState(() {
      _articleItems.addAll(articleItems);
      _isLoading = false;
    });
  }

  void _onRefresh() async {
    _page = 1;
    var result = await GankApi.getJueJinFlutterArticles(_page);
    List articleItems = result['d']['entrylist'];
    _refreshController.refreshCompleted();
    setState(() {
      _articleItems = articleItems;
    });
  }

  void _onLoading() async {
    _page ++ ;
    var result = await GankApi.getJueJinFlutterArticles(_page);
    List articleItems = result['d']['entrylist'];
    _refreshController.loadComplete();
    setState(() {
      _articleItems.addAll(articleItems);
    });
  }

  Widget buildItem(index) {
    var articleItem = _articleItems[index];
    return new ArticleListItem(articleItem);
  }

}

