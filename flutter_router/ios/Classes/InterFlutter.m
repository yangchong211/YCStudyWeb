
#import "RNacho.h"
#import "RNachoConstants.h"

@interface InterFlutter()

@property (nonatomic, strong) id<RNachoRouter>delegate;
@property (nonatomic, strong) FlutterMethodChannel *rnachoChannel;
@property (nonatomic, strong) FlutterMethodChannel *onCreateChannel;
@property (nonatomic, strong) FlutterMethodChannel *onResumeChannel;
@property (nonatomic, strong) FlutterMethodChannel *onDestoryChannel;
@property (nonatomic, strong) FlutterEngine *engine;

@property (nonatomic, copy) NSString *currentPageId;
@property (nonatomic, copy) NSString *currentPageRoute;

@end

@implementation RNacho

+ (RNacho*)instance {
    static RNacho *_instance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        _instance = [[self alloc] init];
    });
    return _instance;
}

+ (void)initializeEngine:(FlutterEngine *)engine
                delegate:(id<RNachoRouter>)delegate
              completion:(void (^)(FlutterEngine *engine))callback {
    [self instance].engine = engine?:[self defaultEngine];
    [self instance].delegate = delegate;
    
    // 自定义引擎的启动入口
    NSString *entryPoint = nil;
    if(delegate && [delegate respondsToSelector:@selector(entryForDart)]) {
       entryPoint = delegate.entryForDart;
    }
    [self.engine runWithEntrypoint:entryPoint];
    
    [self registWithEngine:self.engine];
    if (callback) {
        callback([self instance].engine);
    }
}

+ (void)registWithEngine:(FlutterEngine *)engine {
    Class cls = NSClassFromString(@"GeneratedPluginRegistrant");
    if (cls && engine) {
        if ([cls respondsToSelector:NSSelectorFromString(@"registerWithRegistry:")]) {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-performSelector-leaks"
            [cls performSelector:NSSelectorFromString(@"registerWithRegistry:")
                      withObject:engine];
#pragma clang diagnostic pop
        }
    }
}

#pragma mark - Setter/Getter

- (FlutterMethodChannel*)onCreateChannel {
    if (!_onCreateChannel) {
        _onCreateChannel = [FlutterMethodChannel methodChannelWithName:RNachoOnCreateChannel binaryMessenger:self.engine.binaryMessenger];
    }
    
    return _onCreateChannel;
}

- (FlutterMethodChannel*)onResumeChannel {
    if (!_onResumeChannel) {
        _onResumeChannel = [FlutterMethodChannel methodChannelWithName:RNachoOnResumeChannel binaryMessenger:self.engine.binaryMessenger];
    }
    
    return _onResumeChannel;
}

- (FlutterMethodChannel*)onDestoryChannel {
    if (!_onDestoryChannel) {
        _onDestoryChannel = [FlutterMethodChannel methodChannelWithName:RNachoOnDestroyChannel binaryMessenger:self.engine.binaryMessenger];
    }
    
    return _onDestoryChannel;
}


+ (FlutterEngine *)defaultEngine {
    return [[FlutterEngine alloc] initWithName:RNachoEngineName project:nil];
}

+ (FlutterEngine *)engine {
    return [[self instance] engine];
}

+ (id<RNachoRouter>)delegate {
    return [[self instance] delegate];
}

+ (FlutterMethodChannel*)channelWithLifecycle:(NSString*)key {
    FlutterMethodChannel *channel = nil;
    if ([key isEqualToString:RNachoLifecycleOnCreate]) {
        channel = [[self instance] onCreateChannel];
    } else if ([key isEqualToString:RNachoLifecycleOnResume]) {
        channel = [[self instance] onResumeChannel];
    } else if ([key isEqualToString:RNachoLifecycleOnDestroy]) {
        channel = [[self instance] onDestoryChannel];
    }
    return channel;
}

+ (FlutterMethodChannel *)channelWithBinaryMessenger:(NSObject<FlutterBinaryMessenger> *)binaryMessenger {
    self.instance.rnachoChannel = [FlutterMethodChannel methodChannelWithName:RNachoPluginChannel binaryMessenger:binaryMessenger];
    return self.instance.rnachoChannel;
}

+ (FlutterMethodChannel*)rnachoChannel {
    return self.instance.rnachoChannel;
}

+ (NSString*)currentPage {
    return self.instance.currentPageId;
}

+ (NSString*)currentPageRoute {
    return self.instance.currentPageRoute;
}

+ (void)saveCurrentPage:(NSString *_Nullable)pageId
              pageRoute:(NSString *_Nullable)route {
    self.instance.currentPageId = pageId;
    self.instance.currentPageRoute = route;
}

@end
