import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { useHistory } from 'react-router-dom'

import { contactShape } from '../propTypes'
import { DeleteDialog } from './index'
import { Routes } from '../constants'

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  nameSection: {
    display: 'inline-flex',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
  photo: {
    width: 150,
  },
}))

export const ContactCard = ({ id, contact }) => {
  const {
    name: { first: firstName, last: lastName },
    phone,
    picture: { large: image },
  } = contact
  const { card, info, content, photo, actions, nameSection } = useStyles()
  const history = useHistory()

  const fullName = `${firstName} ${lastName}`
  const guid = contact.login.uuid

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card className={card} id={guid} key={guid}>
        <CardMedia
          id={`photo-${id}`}
          component="img"
          src={image}
          title={`${fullName}-photo`}
          square="true"
          className={photo}
        />
        <div className={info}>
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
          <div className={actions}>
            <IconButton
              id="editButton"
              aria-label="edit"
              color="primary"
              onClick={() => {
                history.push(Routes.EDIT, { contactId: guid })
              }}
            >
              <EditIcon />
            </IconButton>
            <DeleteDialog
              id="deleteDialogButton"
              aria-label="delete"
              fullName={fullName}
              guid={guid}
            />
          </div>
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
