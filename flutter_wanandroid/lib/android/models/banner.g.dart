// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'banner.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Banner _$BannerFromJson(Map<String, dynamic> json) {
  return Banner()
    ..data = json['data'] as List
    ..errorCode = json['errorCode'] as num
    ..errorMsg = json['errorMsg'] as String;
}

Map<String, dynamic> _$BannerToJson(Banner instance) => <String, dynamic>{
      'data': instance.data,
      'errorCode': instance.errorCode,
      'errorMsg': instance.errorMsg
    };
