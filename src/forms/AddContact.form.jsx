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

const useStyles = makeStyles(() => ({
  title: {
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#2c88e0',
    color: '#fff',
    marginBottom: '1rem',
    width: '14rem',
  },
  cancelButton: {
    width: '14rem',
  },
  buttonsContainer: {
    display: 'inline-grid',
  },
  formField: {
    marginBottom: '2rem',
    width: '18rem',
  },
  spinner: {
    marginLeft: '1rem',
  },
}))

export const AddContactForm = () => {
  const {
    title,
    submitButton,
    buttonsContainer,
    formField,
    cancelButton,
    spinner,
  } = useStyles()
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
        <Grid
          item
          xs={12}
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Typography variant="h5" component="h5" className={title}>
            Add New Contact
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
        >
          <form onSubmit={formik.handleSubmit}>
            <Grid item xs={12}>
              <TextField
                id="firstNameInput"
                name="first"
                label="First Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.firstName}
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
                value={formik.values.lastName}
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
                value={formik.values.phoneNumber}
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

export default AddContactForm
