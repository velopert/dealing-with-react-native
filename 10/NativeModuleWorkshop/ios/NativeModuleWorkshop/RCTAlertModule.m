//  RCTAlertModule.m
//  NativeModuleWorkshop

#import "RCTAlertModule.h"

@implementation RCTAlertModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(alert:(NSString *)message)
{
  UIAlertController* alert = [UIAlertController alertControllerWithTitle:@"My Alert"
  message:message
  preferredStyle:UIAlertControllerStyleAlert];

  UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault
                                 handler:^(UIAlertAction * action) {}];
  
  [alert addAction:defaultAction];
  
  UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
  
  dispatch_async(dispatch_get_main_queue(), ^{
      [rootViewController presentViewController:alert animated:YES completion:nil];
  });
}


- (NSDictionary *)constantsToExport
{
 return @{
   @"STRING_VALUE": @"Hello World",
   @"NUMBER_VALUE": @(15)
 };
}


+ (BOOL)requiresMainQueueSetup
{
    return YES;
}


@end
