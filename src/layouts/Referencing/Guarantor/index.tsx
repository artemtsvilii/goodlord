import { FC } from 'react'
import { Field } from 'react-final-form'

import { ErrorField } from '../../../components'
import { required } from '../../../utils/validators'
import { isEmploymentValid } from '../utils'
import { ReferencingFormPage } from '../interefaces'

export const Guarantor: FC<ReferencingFormPage> = ({ form }) => {
  const values = form.getState().values

  const needToAddGuarantor = !isEmploymentValid(values)

  if (!needToAddGuarantor) {
    return (
      <div className="section">
        <h4>Guarantor</h4>
        <span>
          We have received all required information please proceed to submition
        </span>
      </div>
    )
  }

  return (
    <div className="section">
      <h4>Guarantor</h4>
      {needToAddGuarantor && (
        <h5>
          Cause you don't have more than 3 years of employment, you need to
          provide following details
        </h5>
      )}
      <div className="form-field">
        <label>Guarantor name</label>
        <Field
          name="guarantor.name"
          data-testid="guarantor.name"
          component="input"
          type="text"
          placeholder="Guarantor name"
          validate={required}
        />
        <ErrorField name="guarantor.name" />
      </div>
      <div className="form-field">
        <label>Guarantor address</label>
        <Field
          name="guarantor.address"
          data-testid="guarantor.address"
          component="input"
          type="text"
          placeholder="Last name"
          validate={required}
        />
        <ErrorField name="guarantor.address" />
      </div>
      <div className="form-field">
        <label>Relationship to guarantor</label>
        <Field
          name="guarantor.relation"
          render={({ input }) => {
            return (
              <select
                name="guarantor.relation"
                data-testid="guarantor.relation"
                onChange={(event) => {
                  input.onChange(event.target.value)
                }}
              >
                <option value="Parent">Parent</option>
                <option value="Sibling">Sibling</option>
                <option value="Employer">Eployer</option>
                <option value="Other">Other</option>
              </select>
            )
          }}
          validate={required}
        />
        <ErrorField name="guarantor.relation" />
      </div>
    </div>
  )
}
