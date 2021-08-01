import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '3rem',
  },
  title: {
    color: '#000',
  },
}))

export const AddContactForm = () => {
  const { title, container } = useStyles()

  return (
    <div className={container}>
      <Typography variant="h4" component="h4" className={title}>
        Add New Contact
      </Typography>
    </div>
  )
}

export default AddContactForm
