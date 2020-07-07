import { WebPlugin } from '@capacitor/core';
import { CapacitorPusherBeamsAuthPlugin } from './definitions';
import { version } from '../package.json';

export class CapacitorPusherBeamsAuthWeb extends WebPlugin implements CapacitorPusherBeamsAuthPlugin {
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

  async openMap(location: { latitude: number, longitude: number}): Promise<void> {
    // logic here
    console.log(location);
    return;
  }

  async openWebVersion(options: {anything: any}): Promise<{value: any}> {
    const anything = options.anything || `Capacitor Push Beams Auth: ${version}`;
    return anything;
  }
}

const CapacitorPusherBeamsAuth = new CapacitorPusherBeamsAuthWeb();

export { CapacitorPusherBeamsAuth };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorPusherBeamsAuth);
