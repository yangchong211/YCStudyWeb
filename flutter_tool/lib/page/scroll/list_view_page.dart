import 'package:flutter/material.dart';


class ListViewLayoutPage extends StatefulWidget{

  @override
  State<StatefulWidget> createState() {
    return new ListViewState();
  }

}

class ListViewState extends State<ListViewLayoutPage> {

  int type = 1;

  @override
  Widget build(BuildContext context) {
    Widget body;
    if (type == 1){
      body = getListView1();
    } else if(type == 2){
      body = getListView2();
    } else if(type == 3){
      body = getListView3(context);
    }  else if(type == 4){
      body = getListView4(context);
    } else {
      body = getListView1();
    }
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('滚动布局'),
      ),
      body: body,
      floatingActionButton: new FloatingActionButton(
        //点击
        onPressed: _onFabClick,
        tooltip: 'Increment',
        child: new Text("切换"+type.toString()),
      ), // Th
    );
  }

  void _onFabClick(){
    if(type>4){
      type = 0;
    }
    setState(() {
      type = type + 1;
    });
  }

  Widget getListView1(){
    var listView = ListView(
      shrinkWrap: true,
      padding: const EdgeInsets.all(20.0),
      children: <Widget>[
        new Center(
          child: new Text(
            '\n大标题',
            style: new TextStyle(fontFamily: 'serif', fontSize: 20.0),
          ),
        ),
        new Center(
          child: new Text(
            '小标题',
            style: new TextStyle(
              fontFamily: 'serif',
              fontSize: 12.0,
            ),
          ),
        ),
        const Text('I\'m dedicating every day to you'),
        const Text('Domestic life was never quite my style'),
        const Text('When you smile, you knock me out, I fall apart'),
        const Text('And I thought I was so smart'),
      ],
    );
    return listView;
  }


  Widget getListView2(){
    var listView = ListView.builder(
        itemCount: 100,
        itemExtent: 20.0, //强制高度为20.0
        itemBuilder: (BuildContext context, int index) {
          return ListTile(title: Text("$index"));
        }
    );
    return listView;
  }

  Widget getListView3(BuildContext context) {
    //下划线widget预定义以供复用。
    Widget divider1=Divider(color: Colors.blue,);
    Widget divider2=Divider(color: Colors.green);
    return ListView.separated(
      itemCount: 100,
      //列表项构造器
      itemBuilder: (BuildContext context, int index) {
        return ListTile(title: Text("$index"));
      },
      //分割器构造器
      separatorBuilder: (BuildContext context, int index) {
        return index%2==0?divider1:divider2;
      },
    );
  }

  Widget getListView4(BuildContext context) {
    var infiniteListView = new InfiniteListView();
    return infiniteListView;
  }

}

class InfiniteListView extends StatefulWidget {
  @override
  _InfiniteListViewState createState() => new _InfiniteListViewState();
}

class _InfiniteListViewState extends State<InfiniteListView> {
  static const loadingTag = "##loading##"; //表尾标记
  var _words = <String>[loadingTag];

  @override
  void initState() {
    super.initState();
    _retrieveData();
  }

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      itemCount: _words.length,
      itemBuilder: (context, index) {
        //如果到了表尾
        if (_words[index] == loadingTag) {
          //不足100条，继续获取数据
          if (_words.length - 1 < 100) {
            //获取数据
            _retrieveData();
            //加载时显示loading
            return Container(
              padding: const EdgeInsets.all(16.0),
              alignment: Alignment.center,
              child: SizedBox(
                  width: 24.0,
                  height: 24.0,
                  child: CircularProgressIndicator(strokeWidth: 2.0)
              ),
            );
          } else {
            //已经加载了100条数据，不再获取数据。
            return Container(
                alignment: Alignment.center,
                padding: EdgeInsets.all(16.0),
                child: Text("没有更多了", style: TextStyle(color: Colors.grey),)
            );
          }
        }
        //显示单词列表项
        return ListTile(title: Text(_words[index]));
      },
      separatorBuilder: (context, index) => Divider(height: .0),
    );
  }

  void _retrieveData() {
    Future.delayed(Duration(seconds: 2)).then((e) {
      setState(() {
        for(int i=0 ; i<20 ; i++){
          _words.insert(i, "helloWorld"+i.toString());
        }


        //重新构建列表
        // _words.insertAll(_words.length - 1,
        //     //每次生成20个单词
        //     generateWordPairs().take(20).map((e) => e.asPascalCase).toList()
        // );
      });
    });
  }

}


