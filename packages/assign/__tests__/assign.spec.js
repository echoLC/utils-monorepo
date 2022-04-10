import assign from '../src'

describe('assign', () => {
  it('if should cover default key, copy new key', () => {
    const original = { a: 1, b: 2, c: 3 }
    const assignObj = assign(original, { a: 2, d: 4 })
    expect(assignObj.a).toBe(2)
    expect(assignObj.d).toBe(4)
  })
})
