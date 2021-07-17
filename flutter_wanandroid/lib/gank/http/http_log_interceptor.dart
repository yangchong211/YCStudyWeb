


import 'package:dio/dio.dart';

class HttpLogInterceptor extends InterceptorsWrapper {
  @override
  onRequest(RequestOptions options) {
    print("HttpLogInterceptor--请求url: =>${options.path}");
    if (options.data != null) {
      print('HttpLogInterceptor--请求参数: =>' + options.data.toString());
    }
    return options;
  }

  @override
  onResponse(Response response) {
    if (response != null) {
      print('HttpLogInterceptor--返回结果: =>' + response.toString());
    }
    return response;
  }

  @override
  onError(DioError err) {
    print('HttpLogInterceptor--请求异常: =>' + err.toString());
    print('HttpLogInterceptor--请求异常信息: =>' + err.response?.toString() ?? "");
    return err;
  }
}
