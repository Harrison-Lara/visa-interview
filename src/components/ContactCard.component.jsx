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

import { contactShape } from '../propTypes'
import { DeleteDialog } from './index'

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
  actions: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
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
  const { card, info, content, photo, actions } = useStyles()

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
            <Typography component="h6" variant="h6" id="firstAndLastNameText">
              {fullName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              id="phoneNumberText"
            >
              {phone}
            </Typography>
          </CardContent>
          <div className={actions}>
            <IconButton id="editButton" aria-label="edit" color="primary">
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

ContactCard.defaultProps = {
  isLoading: false,
  contact: {
    image: '',
    lastName: '',
    phoneNumber: '',
    firstName: '',
  },
}

export default ContactCard
