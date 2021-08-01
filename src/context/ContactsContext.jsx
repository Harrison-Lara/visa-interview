import React, { createContext, useReducer, useContext } from 'react'
import { v4 as uuid } from 'uuid'

import { ActionType, mockImageUploadURL } from '../constants'

const initialState = []

const ContactsContext = createContext(initialState)
ContactsContext.displayName = 'ContactsContext'

export const useContactsContext = () => useContext(ContactsContext)

export const ContactsProvider = ({ children }) => {
  const contactsReducer = (contacts, action) => {
    switch (action.type) {
      case ActionType.UPDATE:
        return contacts
      case ActionType.DELETE:
        return contacts.filter((contact) => contact.login.uuid !== action.id)
      case ActionType.CREATE:
        const { email, phone, first, last } = action.values
        const formattedUser = [
          {
            email,
            phone,
            name: {
              first,
              last,
            },
            login: {
              uuid: uuid(),
            },
            picture: { large: mockImageUploadURL },
          },
        ]
        const updatedContacts = contacts.concat(formattedUser)

        return updatedContacts
      case ActionType.FETCH:
        return contacts?.length > 0 ? contacts : action.contacts
      default:
        return contacts
    }
  }

  const [contacts, dispatch] = useReducer(contactsReducer, initialState)

  return (
    <ContactsContext.Provider value={{ contacts, dispatch }}>
      {children}
    </ContactsContext.Provider>
  )
}
