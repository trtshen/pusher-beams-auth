declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorPusherBeamsAuth: CapacitorPusherBeamsAuthWebPlugin;
  }
}

export interface CapacitorPusherBeamsAuthWebPlugin {
  addDeviceInterest(options: { interest: string }): Promise<{ message: string }>;
  removeDeviceInterest(options: { interest: string }): Promise<{ success: boolean }>;
  getDeviceInterests(options: { interests: string[] }): Promise<{ interests: string[] }>;
  setDeviceInterests(): Promise<{ success: boolean }>;
  clearDeviceInterests(): Promise<{ success: boolean }>;
  setUserID(options: { beamsAuthURL: string, userID: string, headers: JSON }): Promise<{message: string } | string>;
  clearAllState(): Promise<{ success: boolean }>;
  stop(): Promise<{ success: boolean }>;
  goToAppSetting(options: { value: string }): Promise<{value: string}>;
}

