import { WebPlugin } from '@capacitor/core';
import { CapacitorPusherBeamsAuthWebPlugin } from './definitions';
export declare class CapacitorPusherBeamsAuthWeb extends WebPlugin implements CapacitorPusherBeamsAuthWebPlugin {
    constructor();
    addDeviceInterest(options: {
        interest: string;
    }): Promise<{
        message: string;
    }>;
    removeDeviceInterest(options: {
        interest: string;
    }): Promise<{
        success: boolean;
    }>;
    setUserID(options: {
        beamsAuthURL: string;
        userID: string;
        headers: JSON;
    }): Promise<string | {
        message: string;
    }>;
    getDeviceInterests(options: {
        interests: string[];
    }): Promise<{
        interests: string[];
    }>;
    setDeviceInterests(): Promise<{
        success: boolean;
    }>;
    clearDeviceInterests(): Promise<{
        success: boolean;
    }>;
    clearAllState(): Promise<{
        success: boolean;
    }>;
    stop(): Promise<{
        success: boolean;
    }>;
    goToAppSetting(options: {
        value: any;
    }): Promise<{
        value: any;
    }>;
}
declare const CapacitorPusherBeamsAuth: CapacitorPusherBeamsAuthWeb;
export { CapacitorPusherBeamsAuth };
