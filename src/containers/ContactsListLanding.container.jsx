import React, { useEffect } from 'react'
import useFetch from 'use-http'

import { useContactsContext } from '../context'
import { ActionType, URL } from '../constants'
import { ContactsError, EmptyContact } from '../components'
import { generateContactCards, generateSkeletonCards } from '../helpers'
import { ContactCardsWrapper } from '../containers'

export const ContactsListLanding = () => {
  const { contacts, dispatch } = useContactsContext()
  const { loading, data = [], error } = useFetch(URL, [])

  useEffect(() => {
    data?.results &&
      contacts.length === 0 &&
      dispatch({ type: ActionType.FETCH, contacts: data.results })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.results])

  // TODO: delete all users, show add button center screen

  if (loading) {
    return <ContactCardsWrapper>{generateSkeletonCards()}</ContactCardsWrapper>
  }

  if (error) {
    return <ContactsError />
  }

  if (contacts.length === 0) {
    return <EmptyContact />
  }

  return (
    <ContactCardsWrapper>{generateContactCards(contacts)}</ContactCardsWrapper>
  )
}

export default ContactsListLanding
