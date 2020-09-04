'use strict';

class Game {
  constructor() {
    this._frames = [];
  }

  getFrames() {
    return this._frames;
  }

  addFrame(frame) {
    this._frames.push(frame)
  }
}
