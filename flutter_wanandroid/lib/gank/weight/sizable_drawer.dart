import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SizableDrawer extends StatelessWidget {
  const SizableDrawer(
      {Key key,
        this.elevation = 16.0,
        this.child,
        this.semanticLabel,
        this.widthPercent = 0.7}): assert(elevation != null && elevation >= 0.0),
            assert(widthPercent != null && widthPercent < 1.0 && widthPercent > 0.0),
        super(key: key);

  final double elevation;
  ///宽度百分比
  final double widthPercent;
  ///自widget
  final Widget child;
  final String semanticLabel;

  @override
  Widget build(BuildContext context) {
    String label = semanticLabel;
    switch (defaultTargetPlatform) {
      case TargetPlatform.iOS:
        label = semanticLabel;
        break;
      case TargetPlatform.android:
      case TargetPlatform.fuchsia:
        label = semanticLabel ?? MaterialLocalizations.of(context)?.drawerLabel;
    }

    return Semantics(
      scopesRoute: true,
      namesRoute: true,
      explicitChildNodes: true,
      label: label,
      child: ConstrainedBox(
        constraints: BoxConstraints.expand(
            width: MediaQuery.of(context).size.width * widthPercent),
        child: Material(
          elevation: elevation,
          child: child,
        ),
      ),
    );
  }
}
