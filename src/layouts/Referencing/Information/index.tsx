import { Field } from 'react-final-form'

import { ErrorField } from '../../../components'
import { required } from '../../../utils/validators'

export const Information = () => {
  return (
    <div className="section">
      <h4>Personal</h4>

      <div className="form-field">
        <label>First Name</label>
        <Field
          name="personal.first_name"
          data-testid="personal.first_name"
          component="input"
          type="text"
          placeholder="First name"
          validate={required}
        />
        <ErrorField name="personal.first_name" />
      </div>
      <div className="form-field">
        <label>Last Name</label>
        <Field
          name="personal.last_name"
          data-testid="personal.last_name"
          component="input"
          type="text"
          placeholder="Last name"
          validate={required}
        />
        <ErrorField name="personal.last_name" />
      </div>
      <div className="form-field">
        <label>Address</label>
        <Field
          name="personal.address"
          data-testid="personal.address"
          component="input"
          type="text"
          placeholder="Address"
          validate={required}
        />
        <ErrorField name="personal.address" />
      </div>
    </div>
  )
}
