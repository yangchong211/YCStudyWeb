#import "RNachoPlugin.h"
#import "RNacho.h"

@implementation RNachoPlugin

#pragma mark - FlutterPlugin

+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar> *)registrar {
    FlutterMethodChannel *rnachoChannel = [RNacho channelWithBinaryMessenger:registrar.messenger];
    [registrar addMethodCallDelegate:RNachoPlugin.new channel:rnachoChannel];
}

- (void)handleMethodCall:(FlutterMethodCall*)call result:(FlutterResult)result {
  if ([@"getPlatformVersion" isEqualToString:call.method]) {
    result([@"iOS " stringByAppendingString:[[UIDevice currentDevice] systemVersion]]);
  } else if([@"open" isEqualToString:call.method]) {
      NSDictionary *args = call.arguments;
      NSString *url = args[@"url"];
      [self.adapter open:url urlParams:args completion:^(BOOL ret) {}];
  } else if([@"closeTopContainer" isEqualToString:call.method]) {
      NSDictionary *args = call.arguments;
      NSString *uid = args[@"uniqueId"];
      NSDictionary *resultData = args[@"result"];
      [self.adapter close:uid result:resultData completion:^(BOOL ret) {
          result(@(ret));
      }];
  } else {
    result(FlutterMethodNotImplemented);
  }
}

#pragma mark - public

+ (void)launchFlutterWithAdapter:(id<RNachoRouter>_Nonnull)adapter
                      completion:(void (^_Nullable)(FlutterEngine * _Nullable engine))callback {
    [self launchFlutterWithadapter:adapter engine:nil completion:callback];
}

+ (void)launchFlutterWithadapter:(id<RNachoRouter>_Nonnull)adapter
                          engine:(FlutterEngine *_Nullable)engine
                      completion:(void (^_Nullable)(FlutterEngine * _Nullable engine))callback {
    [RNacho initializeEngine:engine delegate:adapter completion:callback];
}

+ (void)sendFlutterLifecycleEvent:(NSString *_Nonnull)pageId
                        lifecycle:(NSString *_Nonnull)lifecycle
                           params:(NSDictionary *_Nullable)params {
    NSMutableDictionary *arguments = [[NSMutableDictionary alloc] init];
    if ([pageId isKindOfClass:[NSString class]] && pageId.length > 0) {
        [arguments setValue:pageId forKey:@"pageId"];
    }
    if ([lifecycle isKindOfClass:[NSString class]] && lifecycle.length > 0) {
        [arguments setValue:lifecycle forKey:@"lifecycle"];
    }
    if ([params isKindOfClass:NSDictionary.class] && params.count > 0) {
        [arguments addEntriesFromDictionary:params];
    }
    
    FlutterMethodChannel *channel = [RNacho channelWithLifecycle:lifecycle];
    [channel invokeMethod:lifecycle arguments:arguments];
}

+ (void)pauseFlutterApp {
    [self.engine.lifecycleChannel sendMessage:@"AppLifecycleState.paused"];
}

+ (void)resumeFlutterApp {
    [self.engine.lifecycleChannel sendMessage:@"AppLifecycleState.resumed"];
}

+ (void)inactiveFlutterApp {
    [self.engine.lifecycleChannel sendMessage:@"AppLifecycleState.inactive"];
}

#pragma mark - engine/adapter

+ (FlutterEngine *)engine {
    return RNacho.engine;
}

- (id<RNachoRouter>)adapter {
    return RNacho.delegate;
}

+ (void)saveCurrentPage:(NSString*)pageId
              pageRoute:(NSString*)route {
    [RNacho saveCurrentPage:pageId pageRoute:route];
}

@end
