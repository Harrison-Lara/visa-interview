import React from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  CircularProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useContactsContext } from '../context'
import { ActionType, Routes } from '../constants'
import { ContactsError } from '../components'
import { formStyles } from '../helpers'

const useStyles = makeStyles(() => ({
  ...formStyles,
  contactNameText: {
    color: '#2c88e0',
  },
}))

export const EditContactForm = () => {
  const {
    title,
    submitButton,
    buttonsContainer,
    formField,
    cancelButton,
    spinner,
    contactNameText,
  } = useStyles()
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
  const { isSubmitting } = formik

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
          <form onSubmit={formik.handleSubmit}>
            <Grid item xs={12}>
              <TextField
                id="firstNameInput"
                name="first"
                label="First Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.first}
                className={formField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="lastNameInput"
                name="last"
                label="Last Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.last}
                className={formField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phoneNumberInput"
                name="phone"
                label="Phone Number"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className={formField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="emailInput"
                name="email"
                label="Email"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={formField}
              />
            </Grid>
            <div className={buttonsContainer}>
              <Button
                id="submitButton"
                type="submit"
                variant="contained"
                className={submitButton}
                size="large"
              >
                Submit
                {isSubmitting && (
                  <CircularProgress
                    color="inherit"
                    className={spinner}
                    size={20}
                  />
                )}
              </Button>
              <Button
                id="cancelButton"
                className={cancelButton}
                color="primary"
                variant="outlined"
                size="large"
                onClick={() => {
                  history.push(Routes.CONTACTS)
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default EditContactForm
