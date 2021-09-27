import { ISttings } from '~/types'
import { commonAction } from '.'
import { asyncAction } from '..'

export const updateSettings = asyncAction((settings: ISttings) => async (dispatch) => {
  dispatch(commonAction.updateSettings(settings))
})
