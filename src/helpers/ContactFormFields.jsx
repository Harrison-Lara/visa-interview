import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { TextField, Button, Grid, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { formStyles } from '../helpers'
import { Routes } from '../constants'

const useStyles = makeStyles(() => ({
  ...formStyles,
}))

export const ContactFormFields = ({ formik }) => {
  const { submitButton, buttonsContainer, formField, cancelButton, spinner } =
    useStyles()
  const history = useHistory()
  const { isSubmitting, handleChange, values, handleSubmit } = formik

  return (
    <form onSubmit={handleSubmit}>
      <Grid item xs={12}>
        <TextField
          id="firstNameInput"
          name="first"
          label="First Name"
          variant="outlined"
          onChange={handleChange}
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
          onChange={handleChange}
          value={values.last}
          className={formField}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="phoneNumberInput"
          name="phone"
          label="Phone Number"
          variant="outlined"
          onChange={handleChange}
          value={values.phone}
          className={formField}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="emailInput"
          name="email"
          label="Email"
          variant="outlined"
          onChange={handleChange}
          value={values.email}
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
            <CircularProgress color="inherit" className={spinner} size={20} />
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
  )
}

ContactFormFields.propTypes = {
  formik: PropTypes.func.isRequired,
}

export default ContactFormFields
