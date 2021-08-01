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
import { ContactsListWrapper } from './containers'

import './App.css'

const App = () => (
  <main className="app">
    <Router>
      <ContactsProvider>
        <ContactsListWrapper>
          <Switch>
            <Route
              path={Routes.CONTACTS}
              component={ContactsListLanding}
              exact
            />
            <Route path={Routes.EDIT} component={EditContactForm} exact />
            <Route path={Routes.VIEW} component={ViewContact} exact />
            <Route path={Routes.CREATE} component={AddContactForm} exact />
            <Route path="*" component={ContactsListLanding}>
              <Redirect to={Routes.CONTACTS} component={ContactsListLanding} />
            </Route>
          </Switch>
        </ContactsListWrapper>
      </ContactsProvider>
    </Router>
  </main>
)

export default App
