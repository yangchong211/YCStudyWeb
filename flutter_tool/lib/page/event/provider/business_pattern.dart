import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';

enum PatternState {
  none,   //无模式
  normal, //正常模式
  small,  //小屏模式
  overview, //全屏模式
}

class BusinessPattern extends ChangeNotifier {
  PatternState currentState = PatternState.none;
  void updateBusinessPatternState(PatternState state) {
    if (currentState.index != state.index) {
      currentState = state;
      notifyListeners();
    }
  }
}
