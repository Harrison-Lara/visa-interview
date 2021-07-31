import React, { useMemo, useEffect } from 'react'
import useFetch from 'use-http'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useContactsContext } from '../context'
import { ContactCard } from '../components'
import { ContactsListWrapper } from './index'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

export const ContactsListLanding = () => {
  const { cardGrid } = useStyles()
  const { state, dispatch } = useContactsContext()
  const {
    loading,
    error,
    data = [],
  } = useFetch('https://randomuser.me/api/?results=25', [])

  useEffect(() => {
    dispatch({
      state: data?.results,
    })
  }, [data?.results, dispatch])

  const generateContactCards = useMemo(
    () =>
      state?.contacts?.map((contact, index) => {
        const props = {
          id: index,
          contact,
          isLoading: loading,
        }

        return <ContactCard {...props} />
      }),
    [state, loading]
  )

  if (error) {
    return <ContactsListWrapper>Unable to load Contacts</ContactsListWrapper>
  }

  return (
    <ContactsListWrapper>
      <Container className={cardGrid}>
        <Grid container spacing={4}>
          {generateContactCards}
        </Grid>
      </Container>
    </ContactsListWrapper>
  )
}

export default ContactsListLanding
