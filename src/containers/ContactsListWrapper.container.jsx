import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Header } from '../components/index'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 6),
  },
}))

export const ContactsListWrapper = ({ children }) => {
  const { wrapper } = useStyles()

  return (
    <>
      <Header />
      <div className={wrapper}>
        <Container id="contactsLandingWrapper" key="contactsLandingWrapper">
          {children}
        </Container>
      </div>
    </>
  )
}

ContactsListWrapper.propTypes = {
  children: PropTypes.node,
}

export default ContactsListWrapper
