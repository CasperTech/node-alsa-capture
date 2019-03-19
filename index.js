"use strict";
const EventEmitter = require("eventemitter3");
const cmake = require("@caspertech/node-cmake");
const Capture = cmake('node_alsa', false, __dirname);

class AlsaCapture extends EventEmitter {
    constructor(opts) {
        super();

        this.capture = new Capture.StreamingWorker(
            ((event, value, binary) => {
                if (binary) {
                    this.emit(event, binary);
                } else {
                    this.emit(event, value);
                }
            }),
            (() => {
                this.emit("close");
            }),
            ((error) => {
                this.emit("error", error);
            }),
            opts
        );
    }

    close() {
        this.capture.closeInput();
    }
}

module.exports = AlsaCapture;
