import 'package:flutter/cupertino.dart';

enum BusinessPatternState {
  none, //无模式
  normal, //正常模式
  small, //小屏模式
  overview, //全览模式
}

class BusinessPattern extends ChangeNotifier {
  BusinessPatternState currentState = BusinessPatternState.none;
  void updateBusinessPatternState(BusinessPatternState state) {
    if (currentState.index != state.index) {
      currentState = state;
      notifyListeners();
    }
  }

  @override
  void notifyListeners() {
    super.notifyListeners();
  }

}
