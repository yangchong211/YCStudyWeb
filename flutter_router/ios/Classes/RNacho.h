//
//  RNacho.h
//  Pods
//
//

#import <Foundation/Foundation.h>
#import <Flutter/Flutter.h>

#import "RNachoRouter.h"

NS_ASSUME_NONNULL_BEGIN

@interface RNacho : NSObject

/// RNacho内部资源初始化
/// @param engine Flutter引擎
/// @param delegate RNachoRouter协议遵守者
/// @param callback callback 回调
+ (void)initializeEngine:(FlutterEngine * _Nullable)engine
                delegate:(id<RNachoRouter>)delegate
              completion:(void (^)(FlutterEngine *engine))callback;

/// 获取引擎
+ (FlutterEngine *)engine;

/// 获取RNachoRouter遵守者对象
+ (id<RNachoRouter>)delegate;

/// 获取生命周期专用channel
/// @param key 生命周期key值
+ (FlutterMethodChannel*)channelWithLifecycle:(NSString*)key;

/// 构造RNachoPlugin channel
/// @param binaryMessenger FlutterBinaryMessenger对象，用于消息通信
+ (FlutterMethodChannel*)channelWithBinaryMessenger:(NSObject<FlutterBinaryMessenger> *)binaryMessenger;

/// 获取RNacho的channel对象
+ (FlutterMethodChannel*)rnachoChannel;

/// 当前Flutter页面id
+ (NSString*)currentPage;

/// 当前Flutter页面对应的路由
+ (NSString*)currentPageRoute;

/// 存储当前Flutter页面和对应路由
/// @param pageId Flutter页面id
/// @param route Flutter页面对应路由
+ (void)saveCurrentPage:(NSString *_Nullable)pageId
              pageRoute:(NSString *_Nullable)route;

@end

NS_ASSUME_NONNULL_END
