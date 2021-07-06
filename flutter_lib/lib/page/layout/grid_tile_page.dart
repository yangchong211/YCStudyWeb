import 'package:flutter/material.dart';


class GridTilePage extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    return new GridTileState();
  }

}

class GridTileState extends State<GridTilePage>{

  bool _offstage = false;

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(title: new Text("GridTile 的布局方式就是Stack")),
        body: ListView(
          children: <Widget>[
            new Text("用来在GridView中给Item 增加更丰富的展示用的"),
            GridTile(
              header: new Text("这个是头部"),
              footer: new Text("这个是低部"),
              child:Container(
                width: 200,
                height: 200,
                color: Colors.yellow,
              ),
            ),
            RaisedButton(
              onPressed: () {
                setState(() {
                  _offstage = !_offstage;
                });
              },
              color: const Color(0xffff0000),
              child: new Text('调节透明度'),
            ),
          ],
        ));
  }

}