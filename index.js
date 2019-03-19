"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmake = require("@caspertech/node-cmake");
const EventEmitter = require("eventemitter3");
const Capture = cmake('node_alsa', false, __dirname);
class AlsaCapture extends EventEmitter {
    constructor(opts) {
        super();
        this.capture = new Capture.StreamingWorker(((eventName, value, binary) => {
            if (binary) {
                this.emit(eventName, binary);
            }
            else {
                this.emit(eventName, value);
            }
        }), (() => {
            this.emit("close");
        }), ((error) => {
            this.emit("error", error);
        }), opts);
    }
    close() {
        this.capture.closeInput();
    }
}
exports.AlsaCapture = AlsaCapture;
//# sourceMappingURL=index.js.map