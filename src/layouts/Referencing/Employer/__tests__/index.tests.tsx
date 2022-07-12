import { Form } from 'react-final-form'
import { render, screen, cleanup } from '@testing-library/react'
import arrayMutators from 'final-form-arrays'

import { Employer } from '../'
import { ReferencingFormValues } from '../../interefaces'

describe('Employer', () => {
  afterEach(cleanup)

  let values: ReferencingFormValues

  describe('when full employment duration is less than 3 years', () => {
    beforeEach(() => {
      values = {
        employer: [
          {
            name: '',
            start_date: '',
          },
        ],
      }
    })

    it(' should render form with expected fields', () => {
      render(
        <Form
          initialValues={values}
          onSubmit={jest.fn()}
          mutators={{
            ...arrayMutators,
          }}
          render={({ form }) => (
            <form>
              <Employer form={form} />
            </form>
          )}
        />
      )

      const name = screen.getByTestId('employer[0].name')
      expect(name).toBeInTheDocument()
      const startDate = screen.getByTestId('employer[0].start_date')
      expect(startDate).toBeInTheDocument()
      const endDate = screen.getByTestId('employer[0].end_date')
      expect(endDate).toBeInTheDocument()

      const deleteButton = screen.queryByTestId('delete_button')
      expect(deleteButton).not.toBeInTheDocument()

      const addPreviousEmployer = screen.queryByTestId('add_employer')
      expect(addPreviousEmployer).toBeInTheDocument()
    })
  })

  describe('when full employment duration is more than 3 years', () => {
    beforeEach(() => {
      values = {
        employer: [
          {
            name: 'employer 1',
            start_date: '2021-01-01',
            end_date: '2022-01-01',
          },
          {
            name: 'employer 2',
            start_date: '2018-01-01',
            end_date: '2022-01-01',
          },
        ],
      }
    })

    it(' should render form with expected fields', () => {
      render(
        <Form
          initialValues={values}
          onSubmit={jest.fn()}
          mutators={{
            ...arrayMutators,
          }}
          render={({ form }) => (
            <form>
              <Employer form={form} />
            </form>
          )}
        />
      )

      const name = screen.getByTestId('employer[0].name')
      expect(name).toBeInTheDocument()
      const startDate = screen.getByTestId('employer[0].start_date')
      expect(startDate).toBeInTheDocument()
      const endDate = screen.getByTestId('employer[0].end_date')
      expect(endDate).toBeInTheDocument()

      const deleteButton = screen.queryByTestId('delete_button')
      expect(deleteButton).toBeInTheDocument()

      const addPreviousEmployer = screen.queryByTestId('add_employer')
      expect(addPreviousEmployer).not.toBeInTheDocument()
    })
  })
})
