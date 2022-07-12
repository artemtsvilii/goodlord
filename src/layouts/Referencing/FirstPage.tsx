import { FC } from 'react'

import { Information } from './Information'
import { Employer } from './Employer'
import { ReferencingFormPage } from './interefaces'

export const FirstPage: FC<ReferencingFormPage> = ({ form }) => {
  return (
    <>
      <Information />
      <Employer form={form} />
    </>
  )
}
