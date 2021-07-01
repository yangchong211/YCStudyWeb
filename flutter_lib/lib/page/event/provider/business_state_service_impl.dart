import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';
import 'business_pattern.dart';
import 'business_state_service.dart';

class BusinessPatternServiceImpl extends BusinessPatternService {

  final BuildContext context;

  BusinessPatternServiceImpl(this.context);

  @override
  void noneBusinessPattern() {
    BusinessPattern _patternState = _getState(context);
    _patternState.updateBusinessPatternState(BusinessPatternState.none);
  }

  @override
  void normalBusinessPattern() {
    BusinessPattern _patternState = _getState(context);
    _patternState.updateBusinessPatternState(BusinessPatternState.normal);
  }

  @override
  void smallBusinessPattern() {
    BusinessPattern _patternState = _getState(context);
    _patternState.updateBusinessPatternState(BusinessPatternState.small);
  }

  @override
  void overviewBusinessPattern() {
    BusinessPattern _patternState = _getState(context);
    _patternState.updateBusinessPatternState(BusinessPatternState.overview);
  }

  BusinessPatternState get currentPatternState => _getState(context).currentState;

  BusinessPattern _getState(BuildContext context) {
    return Provider.of<BusinessPattern>(context, listen: false);
  }
}
