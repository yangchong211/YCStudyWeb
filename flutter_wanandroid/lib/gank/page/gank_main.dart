

import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:ycflutter/common/Constants.dart';
import 'package:ycflutter/gank/api/gank_api.dart';
import 'package:ycflutter/gank/local/gank_localizations_delegate.dart';
import 'package:ycflutter/gank/page/article_page.dart';
import 'package:ycflutter/gank/page/gank_about_page.dart';
import 'package:ycflutter/gank/page/welfare_page.dart';
import 'package:ycflutter/gank/weight/gank_drawer.dart';
import 'package:ycflutter/gank/weight/icon_font.dart';
import 'package:ycflutter/gank/weight/widget_bottom_tabs.dart';
import 'package:ycflutter/res/YcColors.dart';
import 'package:ycflutter/utils/EventBus.dart';
import 'package:ycflutter/utils/LogUtils.dart';

class GankMain extends StatefulWidget{

  static const String ROUTER_NAME = 'home';

  @override
  State<StatefulWidget> createState() {
    return new GankState();
  }
}

class GankState extends State<GankMain> {

  int _currentPageIndex;
  String _currentDate;
  List _historyData;
  PageController _pageController;

  @override
  void initState() {
    super.initState();
    _pageController = new PageController(initialPage: 0);
    _getHistoryData();
  }

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      //navigatorKey: navigatorKey,
      //设置主题
      theme: ThemeData(
          accentColor: Colors.black,
          textSelectionColor: YcColors.colorWhite,
          primaryColor: YcColors.colorPrimary),
      localizationsDelegates: [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GankLocalizationsDelegate.delegate,
      ],
      //设置home
      home: new Scaffold(
        appBar: _buildAppBar(),
        drawer: GankDrawer(),
        body: _buildBody(),
        bottomNavigationBar: BottomTabs(_pageController, _pageChange),
      ),
    );
  }

  ///获取干货历史发布日期
  void _getHistoryData() async {
    var historyData = await GankApi.getHistoryDateData();
    setState(() {
      _historyData = historyData;
      _currentDate = '今日最新干货';
    });
  }

  ///build AppBar.
  Widget _buildAppBar() {
    return AppBar(
      elevation: 0,
      centerTitle: true,
      title: Offstage(
        offstage: _currentPageIndex != 0,

        ///标题栏显示当前日期
        child: Text(_currentDate ?? ''),
      ),
      actions: <Widget>[_buildActions()],
    );
  }

  ///创建标题栏右侧按钮
  IconButton _buildActions() {
    return new IconButton(
      icon: getActionsIcon(),
      onPressed: () async {
        if (_currentPageIndex == 0) {
          ///显示/隐藏日期
        } else if (_currentPageIndex == 1) {
          ///去搜索页
        } else if (_currentPageIndex == 2) {
          ///切换妹纸图列数按钮
          EventBus.singleton.emit(Constants.updateGirl);
        } else {
        }
      },
    );
  }

  ///获取标题栏右侧图标.
  Icon getActionsIcon() {
    if (_currentPageIndex == 0) {
      return new Icon(Icons.alarm);
    } else if (_currentPageIndex == 1) {
      return new Icon(Icons.brightness_auto);
    } else if (_currentPageIndex == 2) {
      return new Icon(Icons.toys);
    } else {
      return new Icon(Icons.toys);
    }
  }

  Widget _buildBody() {
    return Stack(
      children: <Widget>[
        PageView(
          physics: NeverScrollableScrollPhysics(),
          onPageChanged: _pageChange,
          controller: _pageController,
          children: <Widget>[
            GankAboutPage(),
            GankAboutPage(),
            WelfarePage(),
            ArticlePage()
          ],
        ),
      ],
    );
  }

  ///页面切换回调
  void _pageChange(int index) {
    setState(() {
      if (_currentPageIndex != index) {
        _currentPageIndex = index;
      }
    });
  }

}