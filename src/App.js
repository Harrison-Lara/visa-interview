import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { ContactsListLanding } from './components'
import { ContactsProvider } from './context'
import './App.css'

function App() {
  return (
    <main className="app">
      <ContactsProvider>
        <Router>
          <Switch>
            <Route path="/contacts">
              <ContactsListLanding />
            </Route>
            <Route path="/user">
              <ContactsListLanding />
            </Route>
            <Route path="/add">
              <ContactsListLanding />
            </Route>
            <Route path="/edit">
              <ContactsListLanding />
            </Route>
            <Route path="*">
              <Redirect to="/contacts" />
            </Route>
          </Switch>
        </Router>
      </ContactsProvider>
    </main>
  )
}

export default App
