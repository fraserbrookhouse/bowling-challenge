'use strict';

describe('Frame', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it("starts with 0 for both rolls", function () {
    expect(frame.rollOne).toEqual(0)
    expect(frame.rollTwo).toEqual(0);
  })
});
