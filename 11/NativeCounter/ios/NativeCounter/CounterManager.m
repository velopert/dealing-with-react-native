#import <React/RCTViewManager.h>
 
@interface RCT_EXTERN_MODULE(CounterManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(value, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(leftButtonText, NSString)
RCT_EXPORT_VIEW_PROPERTY(rightButtonText, NSString)
RCT_EXPORT_VIEW_PROPERTY(onPressLeftButton, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPressRightButton, RCTDirectEventBlock)

@end
