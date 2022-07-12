import { ReferencingFormValues } from './interefaces'

const getTimeFromStartToEnd = (startDate: string, endDate?: string): number => {
  const start = new Date(startDate).getTime()
  const end = endDate ? new Date(endDate).getTime() : Date.now()

  return end - start
}

const calculateFullYears = (time: number) =>
  Math.floor(time / 1000 / 60 / 60 / 24 / 365)

export const isEmploymentValid = ({
  employer,
}: ReferencingFormValues): boolean => {
  if (!employer) {
    return false
  }
  const generalDuration = employer.reduce(
    (
      res: number,
      { start_date, end_date }: { start_date?: string; end_date?: string }
    ) => {
      if (start_date) {
        return res + getTimeFromStartToEnd(start_date, end_date)
      }
      return res
    },
    0
  )

  return calculateFullYears(generalDuration) >= 3
}
