import React from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { Typography, Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useContactsContext } from '../context'
import { ActionType, Routes } from '../constants'
import { formStyles, ContactFormFields } from '../helpers'

const useStyles = makeStyles(() => ({
  ...formStyles,
}))

export const AddContactForm = () => {
  const { title } = useStyles()
  const { dispatch } = useContactsContext()
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      first: '',
      last: '',
      email: '',
      phone: '',
    },
    onSubmit: (values, formikHelpers) => {
      const { setSubmitting } = formikHelpers

      setSubmitting(true)
      dispatch({ type: ActionType.CREATE, values })
      history.push(Routes.CONTACTS)
    },
  })

  return (
    <Container>
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h4" component="h4" className={title}>
            Add New Contact
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ContactFormFields formik={formik} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AddContactForm
