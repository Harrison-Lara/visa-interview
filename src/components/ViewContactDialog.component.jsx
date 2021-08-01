import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  FormLabel,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

import { contactShape } from '../propTypes'
import { themeColor } from '../constants'

const useStyles = makeStyles((theme) => ({
  viewTitleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    paddingLeft: theme.spacing(1),
  },
  dialogCloseButton: {
    color: themeColor,
  },
  actionButton: {
    color: themeColor,
    marginRight: theme.spacing(1.25),
  },
  infoIcon: {
    marginLeft: theme.spacing(2),
    color: themeColor,
  },
  gridItem: {
    padding: theme.spacing(1.25),
  },
}))

export const ViewContactDialog = ({ contact }) => {
  const [open, setOpen] = useState(false)
  const {
    viewTitleContainer,
    infoIcon,
    title,
    dialogCloseButton,
    actionButton,
    gridItem,
  } = useStyles()

  const {
    name: { first, last },
    email,
    phone,
  } = contact
  const fullName = `${first} ${last}`

  return (
    <>
      <Button
        id="viewContactButton"
        aria-label="view contact"
        onClick={() => setOpen(true)}
        size="small"
        className={actionButton}
      >
        View
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="view-dialog-title"
        aria-describedby="view-dialog-description"
      >
        <div className={viewTitleContainer}>
          <InfoOutlinedIcon className={infoIcon} />
          <DialogTitle id="view-dialog-title" className={title}>
            {fullName}
          </DialogTitle>
        </div>
        <DialogContent>
          <Grid container>
            <Grid item xs={6} className={gridItem}>
              <FormLabel>First Name</FormLabel>
              <Typography>{first}</Typography>
            </Grid>
            <Grid item xs={6} className={gridItem}>
              <FormLabel>Last Name</FormLabel>
              <Typography>{last}</Typography>
            </Grid>
            <Grid item xs={6} className={gridItem}>
              <FormLabel>Phone Number</FormLabel>
              <Typography>{phone}</Typography>
            </Grid>
            <Grid item xs={6} className={gridItem}>
              <FormLabel>Email Address</FormLabel>
              <Typography>{email}</Typography>
            </Grid>
            {contact?.location && (
              <>
                <Grid item xs={6} className={gridItem}>
                  <FormLabel>Street Address</FormLabel>
                  <Typography>{`${contact.location.street.number} ${contact.location.street.name}`}</Typography>
                </Grid>
                <Grid item xs={6} className={gridItem}>
                  <FormLabel>City</FormLabel>
                  <Typography>{contact.location.city}</Typography>
                </Grid>
                <Grid item xs={6} className={gridItem}>
                  <FormLabel>State</FormLabel>
                  <Typography>{contact.location.state}</Typography>
                </Grid>
                <Grid item xs={6} className={gridItem}>
                  <FormLabel>Postal Code</FormLabel>
                  <Typography>{contact.location.postcode}</Typography>
                </Grid>
                <Grid item xs={6} className={gridItem}>
                  <FormLabel>Country</FormLabel>
                  <Typography>{contact.location.country}</Typography>
                </Grid>
              </>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            id="closeButton"
            onClick={() => setOpen(false)}
            className={dialogCloseButton}
            variant="text"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

ViewContactDialog.propTypes = {
  contact: contactShape,
}

export default ViewContactDialog
