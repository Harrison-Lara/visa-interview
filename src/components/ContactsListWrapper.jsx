import React from 'react'
import PropTypes from 'prop-types'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}))

export const ContactsListWrapper = ({ children }) => {
  const { wrapper } = useStyles()

  return (
    <div className={wrapper}>
      <Container id="contactsLandingWrapper" key="contactsLandingWrapper">
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
