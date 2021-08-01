import React from 'react'
import PropTypes from 'prop-types'
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddCircle from '@material-ui/icons/AddCircle'
import { useHistory } from 'react-router-dom'

import { Routes } from '../constants'

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#1976d2',
  },
  addIcon: {
    justifyContent: 'flex-end',
    flexGrow: 1,
    display: 'flex',
  },
}))

export const Header = ({ isAddNew }) => {
  const { header, addIcon } = useStyles()
  const history = useHistory()

  return (
    <AppBar position="static" className={header}>
      <Toolbar>
        <Typography variant="h4" component="h4">
          Contacts
        </Typography>
        {!isAddNew && (
          <div className={addIcon}>
            <IconButton
              color="inherit"
              aria-label="add contact"
              onClick={() => history.push(Routes.CREATE)}
            >
              <AddCircle />
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  isAddNew: PropTypes.bool,
}

Header.defaultProps = {
  isAddNew: false,
}

export default Header
