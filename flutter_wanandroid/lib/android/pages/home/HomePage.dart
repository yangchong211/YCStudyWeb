/*
Copyright 2017 yangchong211（github.com/yangchong211）

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import 'dart:async';

import 'package:flutter/material.dart';
import 'package:ycflutter/android/api/AndroidApi.dart';
import 'package:ycflutter/android/api/HttpUtils.dart';
import 'package:ycflutter/common/Constants.dart';
import 'package:ycflutter/android/pages/detail/ArticleDetailPage.dart';
import 'package:ycflutter/android/pages/home/ArticleItem.dart';
import 'package:ycflutter/res/YcColors.dart';
import 'package:ycflutter/utils/LogUtils.dart';
import 'package:ycflutter/android/weight/BannerView.dart';
import 'package:ycflutter/android/weight/EndLine.dart';


/*
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/8/22
 *     desc  : 首页面
 *     revise:
 * </pre>
 */
class HomePage extends  StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new HomeState();
  }
}

class HomeState extends State<HomePage> {

  List listData = new List();
  var bannerData;
  //加载的页数
  var curPage = 0;
  var listTotalSize = 0;
  //是否正在加载数据
  bool isLoading = false;
  ScrollController scrollController = new ScrollController();
  //是否显示“返回到顶部”按钮
  bool showToTopBtn = false;
  //轮播图
  BannerView bannerView;
  //上次点击时间
  DateTime _lastPressedAt;

  //这个方法必须写
  @override
  Widget build(BuildContext context) {
    //不要用下面这个方式判空
    //var isEmpty = listData.isEmpty;
    if(listData == null || listData.length == 0){
      //展示progress
      return new Center(
        child: new CircularProgressIndicator(),
      );
    }else{
      return getWillPopScope();
    }
  }

  ///WillPopScope，做返回键的逻辑处理
  WillPopScope getWillPopScope(){
    return new WillPopScope(
      child: new Scaffold(
        body: getBody(),
        floatingActionButton: !showToTopBtn ? null : FloatingActionButton(
          onPressed: (){
            scrollToTopPage();
          },
          tooltip: 'Increment',
          child: Icon(Icons.vertical_align_top),
          mini:true,
        ), // This t
      ),
      onWillPop: () async {
        if (_lastPressedAt == null ||
            DateTime.now().difference(_lastPressedAt) > Duration(seconds: 1)) {
          //两次点击间隔超过1秒则重新计时
          _lastPressedAt = DateTime.now();
          return false;
        }
        return true;
      },
    );
  }


  //构造方法
  HomeState(){
    addListener();
  }

  //初始化操作
  //更多可以看：https://github.com/yangchong211/YCBlogs
  @override
  void initState() {
    super.initState();
    getBanner();
    getMoreList();
  }

  @override
  void dispose() {
    //防止内存泄漏
    scrollController.dispose();
    super.dispose();
  }


  Widget getBody(){
    Widget listView = new ListView.builder(
      itemCount: listData.length + 1,
      //兰等表达式
      //itemBuilder: (context, i) => buildItem(i),
      itemBuilder: (BuildContext context, int index){
        return buildItem(index);
      },
      controller: scrollController,
    );
    Widget body = new RefreshIndicator(child: listView, onRefresh: pullToRefresh);
    return body;
  }


  void addListener() {
    //添加滚动监听事件
    scrollController.addListener(() {
      var offset = scrollController.offset;
      var position = scrollController.position;
      var maxScroll = position.maxScrollExtent;
      var pixels = position.pixels;
      if (maxScroll == pixels && listData.length < listTotalSize) {
        getMoreList();
      }
      if (offset < 300) {
        setState(() {
          showToTopBtn = false;
        });
      } else if (offset >= 300) {
        setState(() {
          showToTopBtn = true;
        });
      }
    });
  }

  ///滚动到顶部
  void scrollToTopPage() {
    //返回到顶部时执行动画
    scrollController.animateTo(.0,
        duration: Duration(milliseconds: 200),
        curve: Curves.ease
    );
  }


  ///刷新控件
  Future<Null> pullToRefresh() async {
    await Future.delayed(Duration(seconds: 2), () {
      print('refresh');
      setState(() {
        curPage = 0;
        getBanner();
        getMoreList();
      });
    });
  }

  ///获取轮播图
  void getBanner() {
    String bannerUrl = AndroidApi.BANNER;
    //请求接口
    HttpUtils.get(bannerUrl, (data) {
      if (data != null) {
        setState(() {
          bannerData = data;
          bannerView = new BannerView(bannerData);
        });
      }
    });
  }

  ///获取更多数据
  ///逗比，看到这里，记得给项目点个star，谢谢。
  ///GitHub：https://github.com/yangchong211/ycflutter
  Future getMoreList() async {
    if (!isLoading) {
      setState(() {
        isLoading = true;
      });
      await Future.delayed(Duration(seconds: 2), () {
        print('加载更多');
        setState(() {
          getHomeList();
          isLoading = false;
        });
      });
    }
  }

  ///获取主页数据
  void getHomeList() {
    isLoading = false;
    String url = AndroidApi.ARTICLE_LIST;
    url += "$curPage/json";
    HttpUtils.get(url, (data) {
      if (data != null) {
        Map<String, dynamic> map = data;
        var _listData = map['datas'];
        listTotalSize = map["total"];
        setState(() {
          List list1 = new List();
          if (curPage == 0) {
            listData.clear();
          }
          curPage++;
          list1.addAll(listData);
          list1.addAll(_listData);
          if (list1.length >= listTotalSize) {
            list1.add(Constants.complete);
          }
          listData = list1;
        });
      }
    });
  }


  Widget buildItem(int index) {
    if (index < listData.length) {
      //添加header头部
      if (index == 0) {
        return addHeader(index);
      }
      index -= 1;
      var itemData = listData[index];
      //添加没有更多
      if (itemData is String && itemData == Constants.complete) {
        return new EndLine();
      }
      //添加博文item
      return new ArticleItem(itemData);
    }
    return getMoreWidget();
  }

  ///加载更多
  Widget getMoreWidget() {
    return Center(
      child: Padding(
        padding: EdgeInsets.all(10.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            new Text('加载中...',
              style: TextStyle(
                  fontSize: 14.0,
                  color: YcColors.colorPrimary,
              ),
            ),
            new CircularProgressIndicator(
              strokeWidth: 1.0,
              //backgroundColor: YcColors.colorPrimary,
            )
          ],
        ),
      ),
    );
  }

  ///添加头部轮播图，
  Widget addHeader(int i) {
    var container = new Container(height: 180.0, child: bannerView,);
    Row content = new Row(
      children: <Widget>[
        new Text('潇湘剑雨：'),
        new Expanded(
          child: new Text(
            'wanAndroid最新博文',
            softWrap: true,
            style: new TextStyle(color: YcColors.colorIndigo),
            textAlign: TextAlign.left,
            maxLines: 1,
          ),
        ),
      ],
    );
    //return content;
    Column column = new Column(
      children: <Widget>[
        new Padding(
          padding: EdgeInsets.all(0.0),
          child: container,
        ),
        new Padding(
          padding: EdgeInsets.fromLTRB(5.0, 15.0, 0.0, 15.0),
          child: content,
        ),
      ],
    );
    return new Card(
      elevation: 0.1,
      child: new InkWell(
        child: column,
        onTap: () {
          Navigator
              .of(context)
              .push(new MaterialPageRoute(builder: (context) {
            return new ArticleDetailPage(
              title: '潇湘剑雨',
              url: 'https://github.com/yangchong211/YCBlogs',
            );
          }));
        },
      ),
    );
  }

}

