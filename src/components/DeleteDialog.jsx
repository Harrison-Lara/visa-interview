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
import ErrorOutline from '@material-ui/icons/ErrorOutline'

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
  },
  title: {
    paddingLeft: '.75rem',
  },
}))

export const DeleteDialog = ({ fullName, guid }) => {
  const [open, setOpen] = useState(false)
  const { dispatch } = useContactsContext()
  const { errorTitleContainer, errorIcon, title } = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton
        aria-label="delete"
        color="secondary"
        onClick={handleClickOpen}
      >
        <DeleteOutlined />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <div className={errorTitleContainer}>
          <ErrorOutline color="error" className={errorIcon} />
          <DialogTitle id="delete-dialog-title" className={title}>
            Warning
          </DialogTitle>
        </div>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            {`Are you sure you want to delete ${fullName}?`}
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
    </div>
  )
}

DeleteDialog.propTypes = {
  guid: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
}

export default DeleteDialog
