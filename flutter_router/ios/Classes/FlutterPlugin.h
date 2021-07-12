#import <Flutter/Flutter.h>

#import "RNachoRouter.h"

@interface RNachoPlugin : NSObject<FlutterPlugin>

+ (void)launchFlutterWithAdapter:(id<RNachoRouter>_Nonnull)adapter
                      completion:(void (^_Nullable)(FlutterEngine * _Nullable engine))callback;

+ (void)launchFlutterWithadapter:(id<RNachoRouter>_Nonnull)adapter
                          engine:(FlutterEngine *_Nullable)engine
                      completion:(void (^_Nullable)(FlutterEngine * _Nullable engine))callback;

+ (void)sendFlutterLifecycleEvent:(NSString *_Nonnull)pageId
                        lifecycle:(NSString *_Nonnull)lifecycle
                           params:(NSDictionary *_Nullable)params;

+ (void)pauseFlutterApp;
+ (void)resumeFlutterApp;
+ (void)inactiveFlutterApp;

+ (FlutterEngine *_Nullable)engine;

+ (void)saveCurrentPage:(NSString *_Nullable)pageId
              pageRoute:(NSString *_Nullable)route;

@end
