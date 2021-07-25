/**
 * @description 添加事件 pollyfill
 * @export
 * @param {*} obj
 * @param {*} type
 * @param {*} fn
 * @param {*} useCapture
 */
export default function addEvent (obj, type, fn, useCapture) {
  // @credit http://stackoverflow.com/questions/2657182/correct-usage-of-addeventlistener-attachevent
  if (obj.addEventListener) {
    obj.addEventListener(type, fn, !!useCapture)
  } else if (obj.attachEvent) {
    // IE6-7
    obj['e' + type + fn] = fn
    obj[type + fn] = function () {
      obj['e' + type + fn](window.event)
    }
    obj.attachEvent('on' + type, obj[type + fn])
  }
}
