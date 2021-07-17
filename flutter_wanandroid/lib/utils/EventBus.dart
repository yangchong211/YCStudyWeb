
class EventBus{
  
  ///私有构造函数
  EventBus.internal();

  ///保存单例
  static EventBus singleton = new EventBus.internal();

  ///工厂构造函数
  factory EventBus()=> singleton;

  ///保存事件订阅者队列，key:事件名(id)，value: 对应事件的订阅者队列
  var map = new Map<Object, List<EventCallback>>();

  ///添加订阅者
  void on(eventName, EventCallback f) {
    if (eventName == null || f == null){
      return;
    }
    map[eventName] ??= new List<EventCallback>();
    map[eventName].add(f);
  }

  ///移除订阅者
  void off(eventName, [EventCallback f]) {
    var list = map[eventName];
    if (eventName == null || list == null){
      return;
    }
    if (f == null) {
      map[eventName] = null;
    } else {
      list.remove(f);
    }
  }

  ///触发事件，事件触发后该事件所有订阅者会被调用
  void emit(eventName, [arg]) {
    var list = map[eventName];
    if (list == null) {
      return;
    }
    int len = list.length - 1;
    //反向遍历，防止在订阅者在回调中移除自身带来的下标错位
    for (var i = len; i > -1; --i) {
      list[i](arg);
    }
  }
}


///订阅者回调签名
typedef void EventCallback(arg);
