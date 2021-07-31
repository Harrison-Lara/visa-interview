import React, { useMemo } from 'react'
import useFetch from 'use-http'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ContactsListWrapper } from './ContactsListWrapper'
import { ContactCard } from './ContactCard'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

export const ContactsListLanding = () => {
  const { cardGrid } = useStyles()
  const {
    loading,
    error,
    data = [],
  } = useFetch('https://randomuser.me/api/?results=25', [])

  const generateContactCards = useMemo(
    () =>
      data?.results?.map((contact, index) => {
        const props = {
          id: index,
          contact,
          isLoading: loading,
        }

        return <ContactCard {...props} />
      }),
    [data?.results, loading]
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
