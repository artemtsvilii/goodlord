import { ReferencingRequestParams } from './interefaces'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const request = async (
  values: ReferencingRequestParams,
  throwError?: boolean
): Promise<{ message: string }> => {
  try {
    await sleep(300)

    if (throwError) {
      throw new Error()
    }

    console.log('request sent with: ', values)

    return { message: 'Data handled successfully' }
  } catch (e: unknown) {
    return { message: 'Error' }
  }
}
