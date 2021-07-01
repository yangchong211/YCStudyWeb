
import 'dart:ui';

///颜色工具类
class ColorUtils{

  ///字符串转换成color
  static Color hexToColor(String color, {Color defaultColor}) {
    if (color == null ||
        color.length != 7 ||
        int.tryParse(color.substring(1, 7), radix: 16) == null) {
      return defaultColor;
    }
    return Color(int.parse(color.substring(1, 7), radix: 16) + 0xFF000000);
  }


}


