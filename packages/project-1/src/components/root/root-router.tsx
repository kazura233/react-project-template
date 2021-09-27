import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

export const withLoading = (CurrentComponent: React.ComponentType) => () =>
  (
    <Suspense fallback={<div>loading...</div>}>
      <CurrentComponent />
    </Suspense>
  )

export const RootRoute: React.FC = () => {
  return (
    <Switch>
      <Route
        exact={true}
        key="hello-world"
        path="/hello-world"
        component={withLoading(lazy(() => import('~/layouts/hello-world')))}
      ></Route>
      <Route key="other" path="/*" component={() => <Redirect to="/hello-world" />}></Route>
    </Switch>
  )
}
