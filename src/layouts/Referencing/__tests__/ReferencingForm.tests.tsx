import { ReferencingForm } from '../ReferencingForm'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

describe('ReferencingForm', () => {
  afterEach(cleanup)

  it('should render form with expected fields on the first page without submit button', () => {
    render(<ReferencingForm />)

    expect(screen.getByText('First Name')).toBeInTheDocument()
    expect(screen.getByText('Last Name')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Employment start date')).toBeInTheDocument()
    expect(screen.getByText('Employment end date')).toBeInTheDocument()

    expect(screen.getByTestId('add_employer')).toBeInTheDocument()

    expect(screen.queryByText('« Previous')).not.toBeInTheDocument()
    expect(screen.queryByText('Next »')).toBeInTheDocument()
    expect(screen.queryByText('Submit')).not.toBeInTheDocument()
  })

  it('should validate first page', () => {
    render(<ReferencingForm />)

    expect(screen.getByText('First Name')).toBeInTheDocument()

    const next = screen.getByText('Next »')
    fireEvent.click(next)

    expect(screen.getByTestId('personal.first_name.error').innerHTML).toBe(
      'Required'
    )
    expect(screen.getByTestId('personal.last_name.error').innerHTML).toBe(
      'Required'
    )
    expect(screen.getByTestId('personal.address.error').innerHTML).toBe(
      'Required'
    )
    expect(screen.getByTestId('employer[0].name.error').innerHTML).toBe(
      'Required'
    )
    expect(screen.getByTestId('employer[0].start_date.error').innerHTML).toBe(
      'Required'
    )
  })

  it('should go to second page', () => {
    render(<ReferencingForm />)

    fireEvent.change(screen.getByTestId('personal.first_name'), {
      target: { value: 'first name' },
    })
    fireEvent.change(screen.getByTestId('personal.last_name'), {
      target: { value: 'last name' },
    })
    fireEvent.change(screen.getByTestId('personal.address'), {
      target: { value: 'address' },
    })
    fireEvent.change(screen.getByTestId('employer[0].name'), {
      target: { value: 'employer name' },
    })
    fireEvent.change(screen.getByTestId('employer[0].start_date'), {
      target: { value: '2019-01-12' },
    })

    const next = screen.getByText('Next »')
    fireEvent.click(next)

    expect(screen.queryByText('« Previous')).toBeInTheDocument()
    expect(screen.queryByText('Next »')).not.toBeInTheDocument()
    expect(screen.queryByText('Submit')).toBeInTheDocument()
  })
})
