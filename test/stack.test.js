class Stack {
    constructor() {
        this.top = -1
        this.items = {}
    }

    get peek() {
        return this.items[this.top]
    }

    push(value) {
        this.top++
        return this.items[this.top] = value
    }
}


describe('My Stack', () => {

    let stack

    beforeEach(() => {
        stack = new Stack()
    })
    it('it created empty', () => {
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    })
    it('can push to the top', () => {
        stack.push('avocado')
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('avocado')
    })
})