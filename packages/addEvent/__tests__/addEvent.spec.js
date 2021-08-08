import addEvent from "../src";

describe("addEvent", () => {
  it("should add event", () => {
    const fn = jest.fn();
    const obj = {
      addEventListener: fn
    };

    addEvent(obj, "test", () => {});
    expect(fn).toHaveBeenCalled();
  });
});
