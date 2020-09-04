'use strict';

describe('Game', function () {
  var game, frame;
  beforeEach(function () {
    game = new Game();
    frame = new Frame();
  });

  describe('addFrame()', function () {
    it('adds frame object to frames array', function () {
      game.addFrame(frame);
      expect(game.getFrames()).toContain(frame);
    });
  });
});
