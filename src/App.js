import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { ContactsListLanding } from './components'
import { ContactsProvider } from './context'
import { Routes } from './constants'
import './App.css'

function App() {
  return (
    <main className="app">
      <ContactsProvider>
        <Router>
          <Switch>
            <Route exact path={Routes.CONTACTS}>
              <ContactsListLanding />
            </Route>
            <Route exact path={Routes.User}>
              <ContactsListLanding />
            </Route>
            <Route exact path={Routes.ADD}>
              <ContactsListLanding />
            </Route>
            <Route exact path={Routes.EDIT}>
              <ContactsListLanding />
            </Route>
            <Route path="*">
              <Redirect to={Routes.CONTACTS} />
            </Route>
          </Switch>
        </Router>
      </ContactsProvider>
    </main>
  )
}

export default App
