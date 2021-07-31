import React from 'react'
import PropTypes from 'prop-types'
import { Container, Typography } from '@material-ui/core'

export const ContactsListWrapper = ({ children }) => {
  return (
    <div>
      <Container
        maxWidth="sm"
        key="contactsWrapperContainer"
        id="contactsWrapperContainer"
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Contacts
        </Typography>
        {children}
      </Container>
    </div>
  )
}

ContactsListWrapper.propTypes = {
  children: PropTypes.node,
}

export default ContactsListWrapper
