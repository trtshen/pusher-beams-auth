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

    @objc func openMap(_ call: CAPPluginCall) {
		let latitude = call.getString("latitude")
		let longitude = call.getNumber("longitude")

		// more logic
	}
}
