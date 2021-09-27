import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { stores } from '~/modules'
import { GlobalStyle } from '~/styles/global'
import { RootRoute } from './root-router'

export const Root: React.FC = () => {
  return (
    <Provider store={stores}>
      <GlobalStyle></GlobalStyle>
      <HashRouter>
        <RootRoute></RootRoute>
      </HashRouter>
    </Provider>
  )
}
