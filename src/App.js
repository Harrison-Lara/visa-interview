import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import AddContactForm from './forms/AddContact.form'
import ContactsListLanding from './containers/ContactsListLanding.container'
import ViewContact from './components/ViewContact.component'
import EditContactForm from './forms/EditContact.form'
import { ContactsProvider } from './context'
import { Routes } from './constants'

import './App.css'

function App() {
  return (
    <main className="app">
      <ContactsProvider>
        <Router>
          <Switch>
            <Route
              path={Routes.CONTACTS}
              component={ContactsListLanding}
              exact
            />
            <Route path={Routes.EDIT} component={EditContactForm} exact />
            <Route path={Routes.VIEW} component={ViewContact} exact />
            <Route path={Routes.ADD} component={AddContactForm} exact />
            <Route path="*" component={ContactsListLanding}>
              <Redirect to={Routes.CONTACTS} component={ContactsListLanding} />
            </Route>
          </Switch>
        </Router>
      </ContactsProvider>
    </main>
  )
}

export default App
