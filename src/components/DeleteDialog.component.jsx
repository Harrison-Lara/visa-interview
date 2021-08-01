import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Warning from '@material-ui/icons/Warning'
import DeleteIcon from '@material-ui/icons/Delete'

import { useContactsContext } from '../context'
import { ActionType, themeColor } from '../constants'

const useStyles = makeStyles((theme) => ({
  errorTitleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  errorIcon: {
    marginLeft: theme.spacing(2),
    color: '#ffcc00',
  },
  title: {
    paddingLeft: theme.spacing(1),
  },
  description: {
    color: '#000',
  },
  deleteButton: {
    color: '#848484',
  },
  dialogCancelButton: {
    color: themeColor,
  },
  dialogDeleteButton: {
    color: '#f44336',
  },
}))

export const DeleteDialog = ({ fullName, guid }) => {
  const [open, setOpen] = useState(false)
  const { dispatch } = useContactsContext()
  const {
    errorTitleContainer,
    errorIcon,
    title,
    description,
    dialogCancelButton,
    deleteButton,
    dialogDeleteButton,
  } = useStyles()

  return (
    <>
      <Button
        id="deleteContactButton"
        aria-label="delete contact"
        onClick={() => setOpen(true)}
        size="small"
        className={deleteButton}
      >
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
            className={dialogCancelButton}
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
              setOpen(false)
            }}
            autoFocus
            className={dialogDeleteButton}
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
