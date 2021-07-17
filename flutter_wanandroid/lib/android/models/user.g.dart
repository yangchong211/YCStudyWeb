// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

User _$UserFromJson(Map<String, dynamic> json) {
  return User()
    ..name = json['name'] as String
    ..age = json['age'] as num;
}

Map<String, dynamic> _$UserToJson(User instance) =>
    <String, dynamic>{'name': instance.name, 'age': instance.age};
