import { WebPlugin } from '@capacitor/core';
import { CapacitorPusherBeamsAuthPlugin } from './definitions';
export declare class CapacitorPusherBeamsAuthWeb extends WebPlugin implements CapacitorPusherBeamsAuthPlugin {
    constructor();
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
}
declare const CapacitorPusherBeamsAuth: CapacitorPusherBeamsAuthWeb;
export { CapacitorPusherBeamsAuth };
