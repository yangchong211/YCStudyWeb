import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';
import 'package:flutter_lib/page/event/provider/pattern_state_service.dart';
import 'business_pattern.dart';

class BusinessPatternServiceImpl extends BusinessPatternService {

  final BuildContext context;
  BusinessPatternServiceImpl(this.context);

  BusinessPattern _getBusinessPatternState(BuildContext context) {
    return Provider.of<BusinessPattern>(context);
  }

  @override
  void nonePattern() {
    BusinessPattern _patternState = _getBusinessPatternState(context);
    _patternState.updateBusinessPatternState(PatternState.none);
  }

  @override
  void normalPattern() {
    BusinessPattern _patternState = _getBusinessPatternState(context);
    _patternState.updateBusinessPatternState(PatternState.normal);
  }

  @override
  void smallPattern() {
    BusinessPattern _patternState = _getBusinessPatternState(context);
    _patternState.updateBusinessPatternState(PatternState.small);
  }

  @override
  void overviewPattern() {
    BusinessPattern _patternState = _getBusinessPatternState(context);
    _patternState.updateBusinessPatternState(PatternState.overview);
  }

}
