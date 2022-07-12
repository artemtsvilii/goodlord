import { Field } from 'react-final-form'

import { StyledError } from './styled'

export const ErrorField = ({ name }: { name: string }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? (
        <StyledError data-testid={`${name}.error`}>{error}</StyledError>
      ) : null
    }
  />
)
