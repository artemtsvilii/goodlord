import { useMemo, FC } from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

import { ErrorField } from '../../../components'
import { required } from '../../../utils/validators'
import { isEmploymentValid } from '../utils'
import { ReferencingFormPage } from '../interefaces'

export const Employer: FC<ReferencingFormPage> = ({ form }) => {
  const {
    mutators: { push },
  } = form

  const values = form.getState().values

  const askForPrevious = useMemo(() => !isEmploymentValid(values), [values])

  return (
    <div className="section">
      <h4>Employer</h4>

      <FieldArray name="employer">
        {({ fields }) => {
          return fields.map((name, index) => {
            return (
              <div key={name}>
                <div className="form-field">
                  <label>Name</label>
                  <Field
                    name={`${name}.name`}
                    data-testid={`${name}.name`}
                    component="input"
                    type="text"
                    placeholder="Name"
                    validate={required}
                  />
                  <ErrorField name={`${name}.name`} />
                </div>

                <div className="form-field">
                  <label>Employment start date</label>
                  <Field
                    name={`${name}.start_date`}
                    data-testid={`${name}.start_date`}
                    component="input"
                    type="date"
                    placeholder="Start date"
                    validate={required}
                  />
                  <ErrorField name={`${name}.start_date`} />
                </div>

                <div className="form-field">
                  <label>Employment end date</label>
                  <Field
                    name={`${name}.end_date`}
                    data-testid={`${name}.end_date`}
                    component="input"
                    type="date"
                    placeholder="End date"
                  />
                  <ErrorField name={`${name}.end_date`} />
                </div>
                <div>
                  {index > 0 && (
                    <button
                      data-testid="delete_button"
                      type="button"
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      Delete current record
                    </button>
                  )}
                </div>
              </div>
            )
          })
        }}
      </FieldArray>

      {askForPrevious && (
        <div className="buttons">
          <h5>
            Full duration of employment is less than 3 years, could you also
            provide previous employers details
            <button
              className="action_button"
              data-testid="add_employer"
              type="button"
              onClick={() => push('employer', {})}
            >
              Add Employer
            </button>
          </h5>
        </div>
      )}
    </div>
  )
}
