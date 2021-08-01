import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Alert, AlertTitle } from '@material-ui/lab'

import { generateSkeletonCards } from '../helpers'
import { ContactCardsWrapper } from '../containers'

const useStyles = makeStyles((theme) => ({
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export const ContactsError = () => {
  const { errorContainer } = useStyles()

  return (
    <>
      <Alert severity="error" className={errorContainer}>
        <AlertTitle>
          We're sorry, it appears something has went wrong
        </AlertTitle>
        <strong>Unable to load contacts</strong>
      </Alert>
      <ContactCardsWrapper>{generateSkeletonCards(6)}</ContactCardsWrapper>
    </>
  )
}

export default ContactsError
