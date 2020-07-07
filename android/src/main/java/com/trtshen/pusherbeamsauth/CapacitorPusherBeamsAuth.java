package com.trtshen.pusherbeamsauth;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class CapacitorPusherBeamsAuth extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod()
    public void openMap(PluginCall call) {
    	Double latitude = call.getDouble("latitude");
    	Double longitude = call.getDouble("longitude");

        JSObject ret = new JSObject();
        ret.put("lat", latitude);
        ret.put("long", longitude);

        Log.v(ret);
        call.success(ret);
    }
}
