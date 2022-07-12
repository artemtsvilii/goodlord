import { useState } from 'react'

import arrayMutators from 'final-form-arrays'
import { Form } from 'react-final-form'

import { FirstPage } from './FirstPage'
import { SecondPage } from './SecondPage'
import { ReferencingFormValues, ReferencingRequestParams } from './interefaces'
import { request } from './request'
import { FormWrapper } from './styled'

const initialValues: ReferencingFormValues = {
  employer: [{ name: '', start_date: '', end_date: '' }],
}

const pages = [FirstPage, SecondPage]

export const ReferencingForm = () => {
  const formSubmit = async (values: ReferencingFormValues) => {
    const employer = values.employer?.map((item) => ({
      ...item,
      start_date: item.start_date?.replaceAll('-', ''),
      end_date: item.end_date?.replaceAll('-', ''),
    }))

    const payload = {
      ...values,
      employer,
    } as ReferencingRequestParams

    const { message } = await request(payload)
    window.alert(message)
  }

  const [page, setPage] = useState(0)

  const next = () => {
    setPage(Math.min(page + 1, pages.length - 1))
  }

  const previous = () => {
    setPage(Math.max(page - 1, 0))
  }

  const handleSubmit = (values: ReferencingFormValues) => {
    const isLastPage = page === pages.length - 1
    if (isLastPage) {
      return formSubmit(values)
    } else {
      next()
    }
  }

  const ActivePage = pages[page]
  const isLastPage = page === pages.length - 1

  return (
    <FormWrapper>
      <p>Goodlord Referencing form</p>

      <Form<ReferencingFormValues>
        initialValues={initialValues}
        onSubmit={handleSubmit}
        mutators={{
          ...arrayMutators,
        }}
        render={({ handleSubmit, submitting, form }) => (
          <form onSubmit={handleSubmit}>
            <>
              <ActivePage form={form} />

              <div className="buttons">
                {page > 0 && (
                  <button
                    className="action_button"
                    type="button"
                    onClick={previous}
                  >
                    « Previous
                  </button>
                )}
                {!isLastPage && (
                  <button className="action_button" type="submit">
                    Next »
                  </button>
                )}
                {isLastPage && (
                  <button
                    type="submit"
                    className="action_button"
                    disabled={submitting}
                  >
                    Submit
                  </button>
                )}
              </div>
            </>
          </form>
        )}
      />
    </FormWrapper>
  )
}
