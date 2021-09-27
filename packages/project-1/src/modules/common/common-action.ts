import { createAction } from '@kazura/react-store'
import { ISttings } from '~/types'
import { ICommonStore } from './common-reducer'

const action = createAction<ICommonStore>('common')

export const updateSettings = action((settings: ISttings) => ({ settings }))
