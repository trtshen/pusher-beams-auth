package com.trtshen.pusherbeamsauth;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.provider.Settings;
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

        Log.i("PusherBeams", "Successfully authenticated with Pusher Beams");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod()
    public void openWebVersion(PluginCall call) {
        String value = call.getString("anything");

        Log.i("PusherBeams::fromAndroid", value);

        JSObject ret = new JSObject();
        ret.put("anything", value);
        call.success(ret);
    }

    @PluginMethod()
    public void openMap(PluginCall call) {
    	Double latitude = call.getDouble("latitude");
    	Double longitude = call.getDouble("longitude");

        JSObject ret = new JSObject();
        ret.put("lat", latitude);
        ret.put("long", longitude);

        Log.v("LAT::", ret.getString("lat"));
        call.success(ret);
    }

    @PluginMethod()
    public void onlyAndroid(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value + " pajamas");
        call.success(ret);
    }

    @PluginMethod()
    public void goToAppSetting(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value + " redirecting...");

        Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        Uri uri = Uri.fromParts("package", getPackageName(), null);
        intent.setData(uri);
        startActivityForResult(call, intent, 1);
        call.success();
    }

    private String getPackageName() {
        return "com.practera.appv2";
    }
}
