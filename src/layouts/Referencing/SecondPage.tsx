import { FC } from 'react'

import { Guarantor } from './Guarantor'
import { ReferencingFormPage } from './interefaces'

export const SecondPage: FC<ReferencingFormPage> = ({ form }) => {
  return <Guarantor form={form} />
}
