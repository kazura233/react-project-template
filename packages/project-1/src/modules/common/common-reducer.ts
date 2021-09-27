import { ISttings } from '~/types'
import { createReducer } from '@kazura/react-store'

const createDefaultSttings = (): ISttings => ({
  switch: false,
})

export interface ICommonStore {
  settings: ISttings
}

export const commonReducer = createReducer<ICommonStore>('common', {
  settings: createDefaultSttings(),
})
