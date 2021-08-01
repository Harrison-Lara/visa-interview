import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import Warning from '@material-ui/icons/Warning'

import { useContactsContext } from '../context'
import { ActionType } from '../constants'

const useStyles = makeStyles((theme) => ({
  errorTitleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  errorIcon: {
    marginLeft: '1rem',
    color: '#ffcc00',
  },
  title: {
    paddingLeft: '.3rem',
  },
  description: {
    color: '#000',
  },
}))

export const DeleteDialog = ({ fullName, guid }) => {
  const [open, setOpen] = useState(false)
  const { dispatch } = useContactsContext()
  const { errorTitleContainer, errorIcon, title, description } = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        id="deleteContactButton"
        aria-label="delete contact"
        color="default"
        onClick={handleClickOpen}
        size="small"
      >
        Remove
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <div className={errorTitleContainer}>
          <Warning className={errorIcon} />
          <DialogTitle id="delete-dialog-title" className={title}>
            Warning
          </DialogTitle>
        </div>
        <DialogContent>
          <DialogContentText
            id="delete-dialog-description"
            className={description}
          >
            Are you sure you want to delete <strong>{fullName}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            id="cancelButton"
            key="cancelButton"
            onClick={handleClose}
            color="primary"
            variant="text"
          >
            Cancel
          </Button>
          <Button
            key="deleteButton"
            id="deleteButton"
            variant="text"
            onClick={() => {
              dispatch({ type: ActionType.DELETE, id: guid })
              handleClose()
            }}
            color="secondary"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

DeleteDialog.propTypes = {
  guid: PropTypes.string,
  fullName: PropTypes.string,
}

export default DeleteDialog
