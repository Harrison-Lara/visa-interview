import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Alert, AlertTitle } from '@material-ui/lab'

import { generateSkeletonCards } from '../helpers'
import { ContactCardsWrapper } from '../containers'

const useStyles = makeStyles(() => ({
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export const ContactsError = ({ singleContact }) => {
  const { errorContainer } = useStyles()

  return (
    <>
      <Alert severity="error" className={errorContainer}>
        <AlertTitle>
          We're sorry, it appears something has went wrong
        </AlertTitle>
        {singleContact ? (
          <strong>Unable to find contact</strong>
        ) : (
          <strong>Unable to load contacts</strong>
        )}
      </Alert>
      <ContactCardsWrapper>{generateSkeletonCards(6)}</ContactCardsWrapper>
    </>
  )
}

ContactsError.propTypes = {
  singleContact: PropTypes.bool,
}

ContactsError.defaultProps = {
  singleContact: false,
}

export default ContactsError
