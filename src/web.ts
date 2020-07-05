import { WebPlugin } from '@capacitor/core';
import { CapacitorPusherBeamsAuthPlugin } from './definitions';

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
}

const CapacitorPusherBeamsAuth = new CapacitorPusherBeamsAuthWeb();

export { CapacitorPusherBeamsAuth };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorPusherBeamsAuth);
