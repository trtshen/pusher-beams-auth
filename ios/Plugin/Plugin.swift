import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorPusherBeamsAuth)
public class CapacitorPusherBeamsAuth: CAPPlugin {
    
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }

    @objc func onlyAndroid(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    
    @objc func openWebVersion(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    
    @objc func goToAppSetting(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        
        let alertController = UIAlertController (
        	title: "Push Notification", 
        	message: "Allow push notification permission on settings?", 
        	preferredStyle: .alert
        )

        let settingsAction = UIAlertAction(title: "Settings", style: .default) { (_) -> Void in

            guard let settingsUrl = URL(string: UIApplication.openSettingsURLString) else {
                return
            }

            if UIApplication.shared.canOpenURL(settingsUrl) {
                UIApplication.shared.open(settingsUrl, completionHandler: { (success) in
                    print("Settings opened: \(success)") // Prints true
                })
            }
        }
        alertController.addAction(settingsAction)
        let cancelAction = UIAlertAction(title: "Cancel", style: .default, handler: nil)
        alertController.addAction(cancelAction)

        DispatchQueue.main.async {
          self.bridge.viewController.present(alertController, animated: true, completion: nil)
        }
        
        call.success([
            "value": value
        ])
    }

    @objc func openMap(_ call: CAPPluginCall) {
        let latitude:String? = call.getString("latitude")
        let longitude:Double? = call.getDouble("longitude")
        print(latitude ?? "default value")
        print(longitude ?? "default value")
		// more logic
        call.resolve([
            "value": latitude ?? "<#default value#> "+String(format:"%.1f", longitude!)
        ]);
	}
}
