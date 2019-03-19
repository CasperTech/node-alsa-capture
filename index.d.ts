import * as EventEmitter from 'eventemitter3';
import { AlsaOptions } from "./AlsaOptions";
export declare class AlsaCapture extends EventEmitter {
    capture: any;
    constructor(opts: AlsaOptions);
    close(): void;
}
