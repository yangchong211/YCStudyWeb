import 'package:json_annotation/json_annotation.dart';

part 'banner.g.dart';

@JsonSerializable()
class Banner {
    Banner();

    List data;
    num errorCode;
    String errorMsg;
    
    factory Banner.fromJson(Map<String,dynamic> json) => _$BannerFromJson(json);
    Map<String, dynamic> toJson() => _$BannerToJson(this);
}
