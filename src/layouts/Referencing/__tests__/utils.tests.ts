import { isEmploymentValid } from '../utils'
import { ReferencingFormValues } from '../interefaces'

describe('utils', () => {
  describe('isEmploymentValid', () => {
    let values: ReferencingFormValues

    it('should return valid for duration more than 3 years', () => {
      values = {
        employer: [
          {
            start_date: '2021-01-01',
            end_date: '2022-01-01',
          },
          {
            start_date: '2018-01-01',
            end_date: '2021-01-01',
          },
        ],
      }

      expect(isEmploymentValid(values)).toBeTruthy()
    })

    it('should return invalid for duration less than 3 years', () => {
      values = {
        employer: [
          {
            start_date: '2021-01-01',
            end_date: '2022-01-01',
          },
          {
            start_date: '2020-01-01',
            end_date: '2021-01-01',
          },
        ],
      }

      expect(isEmploymentValid(values)).toBeFalsy()
    })

    it('should return invalid for emty employers info', () => {
      values = {
        employer: [],
      }

      expect(isEmploymentValid(values)).toBeFalsy()
    })
  })
})
