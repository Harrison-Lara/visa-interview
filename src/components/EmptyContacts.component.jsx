import React from 'react'
import { Typography, Grid, Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'

import { Routes } from '../constants'

const useStyles = makeStyles(() => ({
  message: {
    color: '#000',
  },
  addButton: {
    backgroundColor: '#2c88e0',
    color: '#fff',
    marginTop: '2rem',
    width: '9rem',
  },
}))

export const EmptyContact = () => {
  const { message, addButton } = useStyles()
  const history = useHistory()

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography component="h5" variant="h5" className={message}>
            Create Your First Contact
          </Typography>
          <Button
            id="AddNewContactButton"
            variant="contained"
            className={addButton}
            onClick={() => {
              history.push(Routes.ADD)
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default EmptyContact
