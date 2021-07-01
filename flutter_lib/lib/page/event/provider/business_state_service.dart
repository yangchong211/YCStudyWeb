import 'business_pattern.dart';

abstract class BusinessPatternService {

  BusinessPatternState currentPatternState;
  //无业务模式
  void noneBusinessPattern();
  //正常业务模式
  void normalBusinessPattern();
  //小屏业务模式
  void smallBusinessPattern();
  //全览业务模式
  void overviewBusinessPattern();

}
