declare module "@capacitor/core" {
    interface PluginRegistry {
        CapacitorPusherBeamsAuth: CapacitorPusherBeamsAuthWebPlugin;
    }
}
export interface CapacitorPusherBeamsAuthWebPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    openMap(location: {
        latitude: number;
        longitude: number;
    }): Promise<void>;
    openWebVersion(options: {
        anything: any;
    }): Promise<{
        value: any;
    }>;
    onlyAndroid(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
