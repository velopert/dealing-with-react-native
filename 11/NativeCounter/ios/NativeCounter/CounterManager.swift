@objc (CounterManager)
class CounterManager: RCTViewManager {
 
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
 
  override func view() -> UIView! {
    return CounterView()
  }
 
}
