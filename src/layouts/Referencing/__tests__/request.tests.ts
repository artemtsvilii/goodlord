import { request } from '../request'
import { ReferencingRequestParams } from '../interefaces'

describe('request', () => {
  let values: ReferencingRequestParams = {
    employer: [
      {
        name: 'test name',
        start_date: '2019-01-12',
        end_date: '',
      },
    ],
    personal: {
      first_name: 'test name',
      last_name: 'test name',
      address: 'test address',
    },
  }

  describe('when successful', () => {
    it('should return expected result', async () => {
      const response = await request(values)

      expect(response.message).toBe('Data handled successfully')
    })
  })

  describe('when unsuccessful', () => {
    it('should return expected result', async () => {
      const response = await request(values, true)

      expect(response.message).toBe('Error')
    })
  })
})
