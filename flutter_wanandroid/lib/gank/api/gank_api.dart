


import 'package:ycflutter/gank/http/http_manager.dart';
import 'package:ycflutter/gank/http/http_response.dart';
import 'package:ycflutter/utils/LogUtils.dart';

class GankApi{

  /// gank api urls.
  static const String API_GANK_HOST = 'http://gank.io';
  static const String API_SPECIAL_DAY = "$API_GANK_HOST/api/day/";
  static const String API_DATA = "$API_GANK_HOST/api/data/";
  static const String API_SEARCH = "$API_GANK_HOST/api/search/query";
  static const String API_TODAY = "$API_GANK_HOST/api/today";
  static const String API_HISTORY = "$API_GANK_HOST/api/day/history";
  static const String API_HISTORY_CONTENT = "$API_GANK_HOST/api/history/content";
  static const String API_SUBMIT = "$API_GANK_HOST/api/add2gank";
  static const String CHECK_UPDATE = "$API_GANK_HOST/api/checkversion";


  ///获取分类数据 [category:分类, page: 页数, count:每页的个数]
  static getCategoryData(String category, int page, {count = 20}) async {
    String url = API_DATA + category + "/$count/$page";
    LogUtils.log("GankApi------getCategoryData---"+url);
    HttpResponse response = await HttpManager.instance.request(url);
    return response.data;
  }

  ///获取所有的历史干货日期.
  static getHistoryDateData() async {
    HttpResponse response = await HttpManager.instance.request(API_HISTORY);
    return response.data['results'];
  }

  ///获取掘金文章
  static Future getJueJinFlutterArticles(int page) async {
    String url =
        'https://timeline-merger-ms.juejin.im/v1/get_tag_entry?src=web&tagId=5a96291f6fb9a0535b535438'
        '&page=$page&pageSize=${10}'
        '&sort=createdAt';
    HttpResponse response = await HttpManager.instance.request(url);
    return response.data;
  }
}









