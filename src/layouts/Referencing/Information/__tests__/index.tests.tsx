import { Form } from 'react-final-form'
import { render, screen, cleanup } from '@testing-library/react'
import { Information } from '../'

describe('Information', () => {
  afterEach(cleanup)

  it('should render expected component', () => {
    render(
      <Form
        initialValues={{
          personal: {
            first_name: 'test first name',
            last_name: 'test last name',
            address: 'test address',
          },
        }}
        onSubmit={jest.fn()}
        render={() => (
          <form>
            <Information />
          </form>
        )}
      />
    )

    const firstName = screen.getByTestId('personal.first_name')
    expect(firstName.getAttribute('value')).toBe('test first name')

    const lastName = screen.getByTestId('personal.last_name')
    expect(lastName.getAttribute('value')).toBe('test last name')

    const address = screen.getByTestId('personal.address')
    expect(address.getAttribute('value')).toBe('test address')
  })
})
