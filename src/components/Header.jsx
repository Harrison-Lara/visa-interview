import React from 'react'
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import AddCircle from '@material-ui/icons/AddCircle'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    backgroundColor: '#1976d2',
  },
  title: {
    flexGrow: 1,
  },
}))

export const Header = () => {
  const { menuButton, header, title } = useStyles()

  return (
    <AppBar position="static" className={header}>
      <Toolbar>
        <IconButton
          edge="start"
          className={menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={title}>
          Contacts
        </Typography>
        <IconButton color="inherit" aria-label="add contact">
          <AddCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
