import { Form } from 'react-final-form'
import { render, screen, cleanup } from '@testing-library/react'
import { Guarantor } from '../'
import { ReferencingFormValues } from '../../interefaces'

describe('Information', () => {
  afterEach(cleanup)

  let values: ReferencingFormValues

  describe('when full employment duration is less than 3 years', () => {
    beforeEach(() => {
      values = {
        employer: [
          {
            name: 'test employer',
            start_date: '2021-01-01',
            end_date: '2022-05-01',
          },
        ],
      }
    })
    it(' should render guarantor form', () => {
      render(
        <Form
          initialValues={values}
          onSubmit={jest.fn()}
          render={({ form }) => (
            <form>
              <Guarantor form={form} />
            </form>
          )}
        />
      )

      const name = screen.getByTestId('guarantor.name')
      expect(name).toBeInTheDocument()

      const address = screen.getByTestId('guarantor.address')
      expect(address).toBeInTheDocument()

      const relation = screen.getByTestId('guarantor.relation')
      expect(relation).toBeInTheDocument()
    })
  })

  describe('when full employment duration is more than 3 years', () => {
    beforeEach(() => {
      values = {
        employer: [
          {
            name: 'test employer',
            start_date: '2021-01-01',
            end_date: '2022-05-01',
          },
          {
            name: 'test employer 2',
            start_date: '2018-01-01',
            end_date: '2021-01-01',
          },
        ],
      }
    })
    it(' should render guarantor form', () => {
      render(
        <Form
          initialValues={values}
          onSubmit={jest.fn()}
          render={({ form }) => (
            <form>
              <Guarantor form={form} />
            </form>
          )}
        />
      )

      const name = screen.queryByTestId('guarantor.name')
      expect(name).not.toBeInTheDocument()

      const address = screen.queryByTestId('guarantor.address')
      expect(address).not.toBeInTheDocument()

      const relation = screen.queryByTestId('guarantor.relation')
      expect(relation).not.toBeInTheDocument()

      const infoText = screen.queryByText(
        'We have received all required information please proceed to submition'
      )
      expect(infoText).toBeInTheDocument()
    })
  })
})
