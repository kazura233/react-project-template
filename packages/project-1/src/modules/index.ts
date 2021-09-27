import {
  applyMiddleware,
  createStore,
  Middleware,
  combineReducers,
  Action,
  AnyAction,
  Dispatch,
} from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { IS_DEV } from '~/settings'

import { commonReducer } from './common/common-reducer'
import { createAsyncAction } from '@kazura/react-store'

export const reducers = combineReducers({
  common: commonReducer,
})

export type IStores = ReturnType<typeof reducers>

export interface ThunkDispatch<A extends Action = AnyAction> {
  <TReturnType = any, TState = any, TExtraThunkArg = any>(
    thunkAction: ThunkAction<TReturnType, TState, TExtraThunkArg, A>
  ): TReturnType
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, IStores, unknown, Action<string>>

const middleware: Array<Middleware> = [thunkMiddleware]
if (IS_DEV) {
  middleware.push(createLogger())
}

export const stores = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export const thunkDispatch: ThunkDispatch = (action) => stores.dispatch<any>(action)
export const dispatch: Dispatch = (action) => stores.dispatch<any>(action)
export const selector = <T>(selector: (store: IStores) => T) => selector(stores.getState())

export const asyncAction = createAsyncAction<IStores, unknown, Action<string>>()
