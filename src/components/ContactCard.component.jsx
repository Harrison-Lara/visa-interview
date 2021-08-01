import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  CardActions,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit'

import { contactShape } from '../propTypes'
import { DeleteDialog, ViewContactDialog } from './index'
import { Routes, themeColor } from '../constants'

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    maxWidth: 450,
  },
  content: {},
  nameSection: {
    display: 'inline-flex',
  },
  photo: {
    width: 150,
  },
  actionButton: {
    color: themeColor,
  },
  actionsSection: {
    display: 'flex',
  },
}))

export const ContactCard = ({ id, contact }) => {
  const {
    name: { first: firstName, last: lastName },
    phone,
    picture: { large: image },
  } = contact
  const { card, content, photo, nameSection, actionButton, actionsSection } =
    useStyles()
  const history = useHistory()

  const fullName = `${firstName} ${lastName}`
  const guid = contact.login.uuid

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card className={card} id={guid} key={guid} raised={true}>
        <CardMedia
          id={`photo-${id}`}
          component="img"
          src={image}
          title={`${fullName}-photo`}
          square="true"
          className={photo}
        />
        <div>
          <CardContent className={content} id="cardContent">
            <div className={nameSection}>
              <Typography component="h6" variant="h6" id="firstNameText">
                {firstName}
                &nbsp;
              </Typography>
              <Typography component="h6" variant="h6" id="lastNameText">
                {lastName}
              </Typography>
            </div>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              id="phoneNumberText"
            >
              {phone}
            </Typography>
          </CardContent>
          <CardActions className={actionsSection}>
            <ViewContactDialog
              id="viewDialogButton"
              aria-label="open view dialog"
              contact={contact}
            />
            <Button
              id="editContactButton"
              aria-label="edit contact"
              onClick={() => {
                history.push(Routes.EDIT, { contactId: guid })
              }}
              className={actionButton}
              size="small"
            >
              <EditIcon />
            </Button>
            <DeleteDialog
              id="deleteDialogButton"
              aria-label="open delete dialog"
              fullName={fullName}
              guid={guid}
            />
          </CardActions>
        </div>
      </Card>
    </Grid>
  )
}

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  contact: contactShape,
}

export default ContactCard
