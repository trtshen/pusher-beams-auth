declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorPusherBeamsAuth: CapacitorPusherBeamsAuthPlugin;
  }
}

export interface CapacitorPusherBeamsAuthPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
