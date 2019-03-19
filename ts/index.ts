import * as cmake from '@caspertech/node-cmake'
import * as EventEmitter from 'eventemitter3';
import {AlsaOptions} from "./AlsaOptions";
const Capture = cmake('node_alsa', false, __dirname);

export class AlsaCapture extends EventEmitter {

    capture: any;

    constructor(opts: AlsaOptions) {
        super();

        this.capture = new Capture.StreamingWorker(
            ((eventName: string, value: string, binary: Buffer) => {
                if (binary) {
                    this.emit(eventName, binary);
                } else {
                    this.emit(eventName, value);
                }
            }),
            (() => {
                this.emit("close");
            }),
            ((error: Error) => {
                this.emit("error", error);
            }),
            opts
        );
    }

    close() {
        this.capture.closeInput();
    }
}