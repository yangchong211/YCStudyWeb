
import 'dart:ui';

///颜色工具类
class ColorUtils{

  ///Android中的颜色值通常遵循RGB/ARGB标准
  ///使用时通常以“ # ”字符开头的8位16进制表示
  ///其中ARGB 依次代表透明度（Alpha）、红色(Red)、绿色(Green)、蓝色(Blue)
  ///RGB/ARGB(A表示透明度)
  ///RGB       #RGB888
  ///ARGB      #00RGB888
  ///字符串转换成color
  static Color hexToColor(String color, {Color defaultColor}) {
    if (color == null ||
        color.length != 7 ||
        int.tryParse(color.substring(1, 7), radix: 16) == null) {
      return defaultColor;
    }
    return Color(int.parse(color.substring(1, 7), radix: 16) + 0xFF000000);
  }


  ///将颜色转化为color
  Color toColor(String color , {Color defaultColor}) {
    if (color == null || color.length == 0) {
      return defaultColor;
    }
    if (!color.contains("#")) {
      return defaultColor;
    }
    var hexColor = color.replaceAll("#", "");
    //如果是6位，前加0xff
    if (hexColor.length == 6) {
      hexColor = "0xff" + hexColor;
      return Color(int.parse(hexColor));
    }
    //如果是8位，前加0x
    if (hexColor.length == 8) {
      return Color(int.parse("0x$hexColor"));
    }
    return defaultColor;
  }

}


