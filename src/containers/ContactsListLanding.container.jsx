import React, { useMemo, useEffect } from 'react'
import useFetch from 'use-http'

import {
  generateContactCards,
  generateSkeletonCards,
  ContactCardsWrapper,
} from '../helpers'
import { useContactsContext } from '../context'
import { URL } from '../constants'
import {ContactsError} from '../components'

export const ContactsListLanding = () => {
  const { state, dispatch } = useContactsContext()
  const { loading, data = [], error } = useFetch(URL, [])

  useEffect(() => {
    dispatch({
      state: data?.results,
    })
  }, [data?.results, dispatch])

  const createContactCards = useMemo(() => generateContactCards(state), [state])

  if (loading) {
    return <ContactCardsWrapper>{generateSkeletonCards()}</ContactCardsWrapper>
  }

  if (error) {
    return <ContactsError />
  }

  return <ContactCardsWrapper>{createContactCards}</ContactCardsWrapper>
}

export default ContactsListLanding
