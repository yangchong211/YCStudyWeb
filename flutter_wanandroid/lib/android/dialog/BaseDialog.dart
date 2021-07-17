
import 'package:flutter/material.dart';
import 'package:ycflutter/res/TextStyles.dart';
import 'package:ycflutter/res/YcColors.dart';
import 'package:ycflutter/res/YcDimens.dart';
import 'package:ycflutter/res/YcGaps.dart';

/*
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/11/2
 *     desc  : 弹窗
 *     revise:
 * </pre>
 */
class BaseDialog extends StatefulWidget{

  BaseDialog({
    Key key,
    this.title,
    this.onPressed,
    this.height,
    this.hiddenTitle : false,
    @required this.child
  }) : super(key : key);

  final String title;
  final Function onPressed;
  final Widget child;
  final double height;
  final bool hiddenTitle;

  @override
  _BaseDialog createState() => _BaseDialog();

}

class _BaseDialog extends State<BaseDialog>{

  @override
  Widget build(BuildContext context) {
    //创建透明层
    return Scaffold(
      //透明类型
      backgroundColor: Colors.transparent,
      body: Center(
        child: Container(
            decoration: BoxDecoration(
              color: Colors.white,
              //设置半径
              borderRadius: BorderRadius.circular(8.0),
            ),
            width: 270.0,
            height: widget.height,
            padding: const EdgeInsets.only(top: 24.0),
            child: Column(
              children: <Widget>[
                //这个是内容区域
                Offstage(
                  offstage: widget.hiddenTitle,
                  child: Padding(
                    padding: const EdgeInsets.only(bottom: 8.0),
                    child: Text(
                      widget.hiddenTitle ? "" : widget.title,
                      style: TextStyles.textBoldDark18,
                    ),
                  ),
                ),
                Expanded(child: widget.child),
                Gaps.vGap8,
                Gaps.line,
                //取消和确定按钮
                Row(
                  children: <Widget>[
                    Expanded(
                      child: Container(
                        height: 48.0,
                        child: FlatButton(
                          child: Text(
                            "取消",
                            style: TextStyle(
                                fontSize: Dimens.font_sp18
                            ),
                          ),
                          textColor: YcColors.text_gray,
                          onPressed: (){
                            Navigator.of(context).pop();
                          },
                        ),
                      ),
                    ),
                    Container(
                      height: 48.0,
                      width: 0.6,
                      color: YcColors.line,
                    ),
                    Expanded(
                      child: Container(
                        height: 48.0,
                        child: FlatButton(
                          child: Text(
                            "确定",
                            style: TextStyle(
                                fontSize: Dimens.font_sp18
                            ),
                          ),
                          textColor: YcColors.app_main,
                          onPressed: (){
                            widget.onPressed();
                          },
                        ),
                      ),
                    )
                  ],
                )
              ],
            )
        ),
      ),
    );
  }
}