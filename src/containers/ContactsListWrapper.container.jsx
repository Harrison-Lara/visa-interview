import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'

import { Header } from '../components/index'
import { Routes } from '../constants'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 6),
  },
}))

export const ContactsListWrapper = ({ children, history }) => {
  const { wrapper } = useStyles()
  const isAddNew = history.location.pathname === Routes.CREATE
  const isEdit = history.location.pathname === Routes.EDIT
  
  return (
    <>
      <Header isAddNew={isAddNew} isEdit={isEdit} />
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
  history: PropTypes.object.isRequired,
}

export default withRouter(ContactsListWrapper)
