import has from 'lodash-es/has'
import { createEditor } from '@wangeditor/editor'

/**
 * @description 添加事件 pollyfill
 * @export
 * @param {*} obj
 * @param {*} type
 * @param {*} fn
 * @param {*} useCapture
 */
export default function addEvent (obj, type, fn, useCapture = false) {
  // @credit http://stackoverflow.com/questions/2657182/correct-usage-of-addeventlistener-attachevent
  if (has(obj, 'addEventListener')) {
    obj.addEventListener(type, fn, !!useCapture)
  } else if (has(obj, 'attachEvent')) {
    // IE6-7
    obj['e' + type + fn] = fn
    obj[type + fn] = function () {
      obj['e' + type + fn](window.event)
    }
    obj.attachEvent('on' + type, obj[type + fn])
  }
}

export function createWangEditor (selector) {
  return createEditor({
    selector
  })
}
