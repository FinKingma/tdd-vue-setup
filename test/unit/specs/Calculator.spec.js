import { transform } from '@/modules/Calculator'

describe('Calculator', () => {
  it('should transform data', () => {
    expect(transform(1)).toEqual(2)
  })
})
