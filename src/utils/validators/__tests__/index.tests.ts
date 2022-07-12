import { required } from '..'

describe('validators', () => {
  describe('required', () => {
    it('when value is not valid should return validation message', () => {
      expect(required(undefined)).toBe('Required')
    })

    it('when value is valid should return undefined', () => {
      expect(required('test')).not.toBeDefined()
    })
  })
})
