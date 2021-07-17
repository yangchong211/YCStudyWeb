
import 'package:flutter/material.dart';
import 'package:ycflutter/gank/local/gank_localizations.dart';
import 'package:ycflutter/gank/local/string_base.dart';

class CommonUtils{

  ///获取本地语言
  static StringBase getLocale(BuildContext context) {
    return GankLocalizations.of(context).currentLocalized;
  }

}