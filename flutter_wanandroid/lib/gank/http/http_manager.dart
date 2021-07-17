


import 'dart:collection';
import 'package:dio/dio.dart';
import 'package:ycflutter/gank/http/http_code.dart';
import 'package:ycflutter/gank/http/http_log_interceptor.dart';
import 'package:ycflutter/gank/http/http_method.dart';
import 'package:ycflutter/gank/http/http_response.dart';
import 'package:ycflutter/res/YcString.dart';

class HttpManager{

  Dio dio;
  Response response;
  static HttpManager get instance => _getInstance();
  static HttpManager _instance;

  HttpManager._init() {
    if (dio == null) {
      dio = Dio();
      dio.interceptors.add(HttpLogInterceptor());
    }
  }

  static HttpManager _getInstance() {
    if (_instance == null) {
      _instance = new HttpManager._init();
    }
    return _instance;
  }

  String getHttpMethod(HttpMethod httpMethod) {
    String method;
    if (httpMethod == HttpMethod.get) {
      method = 'get';
    } else if (httpMethod == HttpMethod.post) {
      method = 'post';
    } else if (httpMethod == HttpMethod.patch) {
      method = 'patch';
    } else if (httpMethod == HttpMethod.put) {
      method = 'put';
    } else if (httpMethod == HttpMethod.delete) {
      method = 'delete';
    } else if (httpMethod == HttpMethod.options) {
      method = 'options';
    } else {
      method = 'get';
    }
    return method;
  }

  Future<HttpResponse> request(url, {method = HttpMethod.get, params, header}) async {
    ///Headers
    Map<String, String> headers = HashMap();
    if (header != null) {
      headers.addAll(header);
    }

    ///Options
    Options option = new Options();
    option.headers = headers;
    option.method = getHttpMethod(method);
    option.connectTimeout = 15000;
    option.receiveTimeout = 15000;

    ///dio request
    try {
      response = await dio.request(url, data: params, options: option);
    } on DioError catch (e) {
      Response errorResponse = e.response ?? Response();
      if (e.type == DioErrorType.CONNECT_TIMEOUT) {
        errorResponse.statusCode = Code.NETWORK_TIMEOUT;
      }
      return HttpResponse(e.message, false, errorResponse.statusCode);
    }

    ///result
    try {
      if (response.statusCode == 200 || response.statusCode == 201) {
        return HttpResponse(response.data, true, Code.SUCCESS);
      }
    } catch (e) {
      return HttpResponse(e.toString(), false, response.statusCode);
    }

    return HttpResponse(YcString.UNKNOWN_ERROR, false, response.statusCode);
  }

}






