//
//  RNachoRouter.h
//  Pods
//
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol RNachoRouter <NSObject>
@optional

/// 设置flutter引擎启动入口
- (NSString *)entryForDart;
    
@required

/// 关闭页面
/// @param uniqueId page ID
/// @param resultData 页面关闭要返回的结果（向上一页面传值）
/// @param completion 关闭完成回调
- (void)close:(NSString *)uniqueId
       result:(NSDictionary *)resultData
   completion:(void (^)(BOOL))completion;

/// 打开页面
/// @param url 页面路由
/// @param urlParams 传入页面的参数
/// @param completion 打开页面后回调
- (void)open:(NSString *)url
   urlParams:(NSDictionary *)urlParams
  completion:(void (^)(BOOL))completion;

@end

NS_ASSUME_NONNULL_END
