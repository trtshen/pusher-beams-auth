import { Plugin } from '@capacitor/core/dist/esm/definitions';

export interface CapacitorPusherBeamsAuthCorePlugin extends Plugin {
  echo(options: { value: string }): Promise<{value: string}>;
  openMap(location: {latitude: number, longitude: number}): Promise<void>;

  // android only
  onlyAndroid(options: { value: string }): Promise<{value: string}>;
}