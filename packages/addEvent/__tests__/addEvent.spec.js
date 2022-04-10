import addEvent from "../src";
import { createWangEditor } from '../src'

describe("addEvent", () => {
  it("should add event", () => {
    const fn = jest.fn();
    const obj = {
      addEventListener: fn
    };

    addEvent(obj, "test", () => {});
    expect(fn).toHaveBeenCalled();
  });

  it("should create editor", () => {
    const container = document.createElement('div')
    div.id = "editor"
    document.body.appendChild(container)

    const editor = createWangEditor('#editor');

    expect(typeof editor).toBe('object');
  });
});
