import React, { createContext, useReducer } from 'react'

export const ContactsContext = createContext({ contacts: [] })

export const ContactsProvider = ({ children }) => {
  const contactsReducer = (state, action) => {
    switch (action) {
      case 'update':
        return state
      case 'delete':
        return state
      case 'create':
        return state
      default:
        return state
    }
  }

  const initialState = {
    contacts: [],
  }

  const [state, dispatch] = useReducer(contactsReducer, initialState)

  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  )
}
