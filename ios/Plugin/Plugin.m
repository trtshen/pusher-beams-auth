#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(CapacitorPusherBeamsAuth, "CapacitorPusherBeamsAuth",
           CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(onlyAndroid, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(openWebVersion, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(goToAppSetting, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(openMap, CAPPluginReturnPromise);
           
)
