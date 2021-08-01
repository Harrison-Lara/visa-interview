import React from 'react'
import PropTypes from 'prop-types'
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddCircle from '@material-ui/icons/AddCircle'
import { useHistory } from 'react-router-dom'

import { Routes } from '../constants'

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#1976d2',
  },
  addIcon: {
    justifyContent: 'flex-end',
    flexGrow: 1,
    display: 'flex',
  },
}))

export const Header = ({ isAddNew, isEdit }) => {
  const { header, addIcon } = useStyles()
  const history = useHistory()

  return (
    <AppBar position="static" className={header}>
      <Toolbar>
        <Typography variant="h4" component="h4">
          Contacts
        </Typography>
        {!isAddNew && !isEdit && (
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
  isEdit: PropTypes.bool
}

Header.defaultProps = {
  isAddNew: false,
  isEdit: false,
}

export default Header
