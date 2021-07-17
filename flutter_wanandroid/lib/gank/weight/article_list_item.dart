


import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:ycflutter/gank/weight/page_gallery.dart';
import 'package:ycflutter/res/TextStyles.dart';

class ArticleListItem extends StatefulWidget{

  final articleItem;

  ArticleListItem(this.articleItem);

  @override
  State<StatefulWidget> createState() {
    return new ArticleListItemState();
  }

}

class ArticleListItemState extends State<ArticleListItem>{

  @override
  Widget build(BuildContext context) {
    return new GestureDetector(
      onTap: (){

      },
      onDoubleTap: (){

      },
      onLongPress: (){

      },
      child: new Container(
        //绘制一个盒子
        decoration: BoxDecoration(
            color: Theme.of(context).canvasColor,
            border: Border(
              bottom:
              BorderSide(width: 0.0, color: Theme.of(context).dividerColor),
            )),
//        child: Row(
//          crossAxisAlignment: CrossAxisAlignment.stretch,
//          children: _buildArticleListItem(context),
//        ),
        child: new Text(
                widget.articleItem['content']?.isEmpty ?? true
                ? widget.articleItem['summaryInfo']
                    : widget.articleItem['content'])
        ),
    );
  }

  List<Widget> _buildArticleListItem(BuildContext context) {
    var contentWidgets = <Widget>[
      //会抛出错误：Another exception was thrown: BoxConstraints forces an infinite height.
      //原因：在Row或者Column组件里使用listview等容器类组件没有指定宽高。
      //解决：用Expand或者Flexible包裹一下这种无限制的容器即可。
      new Expanded(
        child: new Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            new Padding(
              padding: const EdgeInsets.fromLTRB(16, 10, 16, 10),
              child: new Text(
                widget.articleItem['content']?.isEmpty ?? true
                    ? widget.articleItem['summaryInfo']
                    : widget.articleItem['content'],
                style: TextStyles.textDark14,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
            ),
            new Container(
              margin: const EdgeInsets.fromLTRB(16, 0, 16, 10),
              child: new Row(

              ),
            ),
          ],
        ),
      ),
    ];
    ///添加右侧缩略图显示
//    if (widget.articleItem['screenshot'] != null && widget.articleItem['screenshot'].isNotEmpty) {
//      var imageUrl = widget.articleItem['screenshot'];
//      contentWidgets.add(GestureDetector(
//          onTap: () {
//            Navigator.of(context).push(MaterialPageRoute(builder: (context) {
//              return GalleryPage([imageUrl], "");
//            }));
//          },
//          child: Container(
//            margin: EdgeInsets.only(right: 16, top: 20, bottom: 20),
//            width: 80,
//            decoration: BoxDecoration(
//              image: DecorationImage(
//                fit: BoxFit.cover,
//                image: CachedNetworkImageProvider(imageUrl),
//              ),
//            ),
//          )));
//    }
    return contentWidgets;
  }
}






