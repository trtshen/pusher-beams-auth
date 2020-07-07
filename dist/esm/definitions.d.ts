declare module "@capacitor/core" {
    interface PluginRegistry {
        CapacitorPusherBeamsAuth: CapacitorPusherBeamsAuthPlugin;
    }
}
export interface CapacitorPusherBeamsAuthPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    openMap(location: {
        latitude: number;
        longitude: number;
    }): Promise<void>;
}
