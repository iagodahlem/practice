const LinkedList = require('./LinkedList')

describe('LinkedList', () => {
  it('add', () => {
    const list = new LinkedList()

    list.add(1)
    list.add(2)

    expect(list).toEqual({
      head: { next: { next: null, value: 2 }, value: 1 },
      tail: { next: null, value: 2 },
    })
  })

  it('size', () => {
    const list = new LinkedList()

    expect(list.size()).toBe(0)

    list.add(1)

    expect(list.size()).toBe(1)

    list.add(2)

    expect(list.size()).toBe(2)
  })

  it('empty', () => {
    const list = new LinkedList()

    expect(list.empty()).toBeTruthy()

    list.add(1)

    expect(list.empty()).toBeFalsy()
  })
})
