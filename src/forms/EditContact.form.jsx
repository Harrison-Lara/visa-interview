import React from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { Typography, Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useContactsContext } from '../context'
import { ActionType, Routes } from '../constants'
import { ContactsError } from '../components'
import { formStyles, ContactFormFields } from '../helpers'

const useStyles = makeStyles(() => ({
  ...formStyles,
  contactNameText: {
    color: '#2c88e0',
  },
}))

export const EditContactForm = () => {
  const { title, contactNameText } = useStyles()
  const { contacts, dispatch } = useContactsContext()
  const history = useHistory()

  const contactId = history.location.state.contactId
  const foundContact = contacts.find(
    (contact) => contact.login.uuid === contactId
  )

  const formik = useFormik({
    initialValues: {
      first: foundContact?.name.first || '',
      last: foundContact?.name.last || '',
      email: foundContact?.email || '',
      phone: foundContact?.phone || '',
    },
    onSubmit: (values, formikHelpers) => {
      const { setSubmitting } = formikHelpers
      const formValues = { ...values, contactId }
      setSubmitting(true)
      dispatch({ type: ActionType.UPDATE, formValues })
      history.push(Routes.CONTACTS)
    },
  })

  if (!foundContact) {
    return <ContactsError singleContact />
  }

  const {
    name: { first, last },
  } = foundContact
  const fullName = `${first} ${last}`

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
            Edit Contact
          </Typography>
          <Typography variant="h6" component="h6" className={contactNameText}>
            {fullName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ContactFormFields formik={formik} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default EditContactForm
