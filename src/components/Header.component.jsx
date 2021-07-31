import React from 'react'
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddCircle from '@material-ui/icons/AddCircle'
import { useHistory } from 'react-router-dom'

import { Routes } from '../constants'

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#1976d2',
  },
  titleText: {
    flexGrow: 1,
  },
}))

export const Header = () => {
  const { header, titleText } = useStyles()
  const history = useHistory()

  const isAddPage = history.location.pathname === Routes.ADD

  return (
    <AppBar position="static" className={header}>
      <Toolbar>
        <Typography variant="h5" className={titleText}>
          Contacts
        </Typography>
        {!isAddPage && (
          <IconButton
            color="inherit"
            aria-label="add contact"
            onClick={() => history.push(Routes.ADD)}
          >
            <AddCircle />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
