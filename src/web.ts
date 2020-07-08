import { WebPlugin } from '@capacitor/core';
import { CapacitorPusherBeamsAuthWebPlugin } from './definitions';

export class CapacitorPusherBeamsAuthWeb extends WebPlugin implements CapacitorPusherBeamsAuthWebPlugin {
  constructor() {
    super({
      name: 'CapacitorPusherBeamsAuth',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async onlyAndroid(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO::Android', options);
    return options;
  }

  async openMap(location: { latitude: number, longitude: number}): Promise<void> {
    // logic here
    console.log(location);
    return;
  }

  async openWebVersion(options: {anything: any}): Promise<{value: any}> {
    const anything = options.anything || `Capacitor Push Beams Auth: TESTING`;
    return anything;
  }
  
  async goToAppSetting(options: {value: any}): Promise<{value: any}> {
    const anything = options.value  || `Capacitor Push Beams Auth: TESTING`;
    return anything;
  }
}

const CapacitorPusherBeamsAuth = new CapacitorPusherBeamsAuthWeb();

export { CapacitorPusherBeamsAuth };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorPusherBeamsAuth);
