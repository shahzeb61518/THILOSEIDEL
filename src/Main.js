import React, { Component, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import routes from './app-routes/routes'
import { ROUTES } from './helpers/RoutePaths'
import Header from './views/common/header'
class Main extends Component {
  loading = () => (
    <div className='animated fadeIn pt-1 text-center'>Loading...</div>
  )

  render () {
    return (
      <div className='app'>
        <div className='app-body'>
          <main className='main'>
            <div>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null
                  })}
                  <Redirect to={ROUTES.dashboard} />
                </Switch>
              </Suspense>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default Main
