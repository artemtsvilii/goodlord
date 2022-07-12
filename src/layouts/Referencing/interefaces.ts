import { FormApi } from 'final-form'

export interface ReferencingFormPage {
  form: FormApi
}

interface PersonalInfo {
  first_name?: string
  last_name?: string
  address?: string
}

interface Employer {
  name?: string
  start_date?: string
  end_date?: string
}
interface Guarantor {
  name?: string
  address?: string
  relation?: string
}

export interface ReferencingFormValues {
  personal?: PersonalInfo
  employer?: Array<Employer>
  guarantor?: Guarantor
}

type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property]
}

export interface ReferencingRequestParams extends ReferencingFormValues {
  personal: WithRequiredProperty<
    PersonalInfo,
    'first_name' | 'last_name' | 'address'
  >
  employer: Array<WithRequiredProperty<Employer, 'name' | 'start_date'>>
  guarantor?: WithRequiredProperty<Guarantor, 'name' | 'address' | 'relation'>
}
