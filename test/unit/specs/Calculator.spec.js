import { transform } from '@/modules/Calculator'

describe('Calculator', () => {
  it('should calculate ', () => {
    expect(transform(1).toEqual(2))
  })
})
