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
  const {
    isSubmitting,
    handleChange,
    values,
    handleSubmit,
    errors,
    isValid,
    setFieldTouched,
    touched,
  } = formik

  const addNewFormEmptyValues =
    values.first === '' &&
    values.last === '' &&
    values.phone === '' &&
    values.email === ''

  return (
    <form onSubmit={handleSubmit}>
      <Grid item xs={12}>
        <TextField
          id="firstNameInput"
          name="first"
          label="First Name"
          variant="outlined"
          onChange={handleChange}
          value={values.first}
          className={formField}
          error={errors?.first && touched?.first ? true : false}
          helperText={touched?.first && errors?.first}
          onBlur={() => !touched?.first && setFieldTouched('first')}
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
          error={errors?.last && touched?.last ? true : false}
          helperText={touched?.last && errors?.last}
          onBlur={() => !touched?.last && setFieldTouched('last')}
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
          error={touched?.phone && errors?.phone ? true : false}
          helperText={touched?.phone && errors?.phone}
          onBlur={() => !touched?.phone && setFieldTouched('phone')}
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
          error={errors?.email && touched?.email ? true : false}
          helperText={touched?.email && errors?.email}
          onBlur={() => !touched?.email && setFieldTouched('email')}
        />
      </Grid>
      <div className={buttonsContainer}>
        <Button
          id="submitButton"
          type="submit"
          variant="contained"
          className={submitButton}
          size="large"
          disabled={!isValid || addNewFormEmptyValues}
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
  formik: PropTypes.object.isRequired,
}

export default ContactFormFields
