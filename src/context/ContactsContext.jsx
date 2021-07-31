import React, { createContext, useReducer, useContext } from 'react'
import { ActionType } from '../constants'

const initialState = {
  contacts: [],
}

const ContactsContext = createContext(initialState)
ContactsContext.displayName = 'ContactsContext'

export const useContactsContext = () => useContext(ContactsContext)

export const ContactsProvider = ({ children }) => {
  const contactsReducer = (state, action) => {
    switch (action.type) {
      case ActionType.UPDATE:
        return state
      case ActionType.DELETE:
        return {
          contacts: state.contacts.filter(
            (contact) => contact.login.uuid !== action.id
          ),
        }
      case ActionType.CREATE:
        return state
      default:
        return { contacts: action.state }
    }
  }

  const [state, dispatch] = useReducer(contactsReducer, initialState)

  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  )
}
