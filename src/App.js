import React from 'react'
import { ContactsListLanding } from './components'
import { ContactsProvider } from './context'
import './App.css'

function App() {
  return (
    <main className="app">
      <ContactsProvider>
        <ContactsListLanding />
      </ContactsProvider>
    </main>
  )
}

export default App
