import { sayHelloTo } from './index'

describe('test sayHelloTo function', () => {
  it('should console log Hello Kevin', () => {
    const logSpy = jest.spyOn(console, 'log')

    sayHelloTo('Kevin')

    expect(logSpy).toHaveBeenCalledWith('Hello Kevin')
  })
})
