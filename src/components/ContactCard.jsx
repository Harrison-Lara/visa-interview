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
import { Skeleton } from '@material-ui/lab'
import EditIcon from '@material-ui/icons/Edit'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

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
    width: 151,
  },
}))

export const ContactCard = ({ id, contact, isLoading }) => {
  const {
    name: { first: firstName, last: lastName },
    phone,
    picture: { large: image },
    email,
  } = contact
  const { card, info, content, photo, actions } = useStyles()

  const fullName = `${firstName} ${lastName}`
  const key = `Card-${id}`

  return (
    <Grid item key={card} xs={12} sm={12} md={6} lg={4}>
      <Card className={card} id={key} key={key}>
        {isLoading ? (
          <Skeleton variant="rect" width="100%">
            <div style={{ paddingTop: '50%' }} />
          </Skeleton>
        ) : (
          <CardMedia
            id={`photo-${id}`}
            component="img"
            src={image}
            title={`${fullName}-photo`}
            square="true"
            className={photo}
          />
        )}
        <div className={info}>
          <CardContent className={content} id="cardContent">
            {isLoading ? (
              <Skeleton width="100%">
                <Typography>.</Typography>
              </Skeleton>
            ) : (
              <Typography component="h6" variant="h6" id="firstAndLastNameText">
                {fullName}
              </Typography>
            )}
            {isLoading ? (
              <Skeleton width="100%">
                <Typography>.</Typography>
              </Skeleton>
            ) : (
              <Typography
                variant="subtitle1"
                color="textSecondary"
                id="phoneNumberText"
              >
                {phone}
              </Typography>
            )}
            {isLoading ? (
              <Skeleton width="100%">
                <Typography>.</Typography>
              </Skeleton>
            ) : (
              <Typography
                variant="subtitle1"
                color="textSecondary"
                id="emailText"
              >
                {email}
              </Typography>
            )}
          </CardContent>
          <div className={actions}>
            <IconButton aria-label="edit" color="primary">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" color="secondary">
              <DeleteOutlined />
            </IconButton>
          </div>
        </div>
      </Card>
    </Grid>
  )
}

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  contact: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    phoneNumber: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool,
}

ContactCard.defaultProps = {
  image: '',
  lastName: '',
  phoneNumber: '',
  isLoading: false,
}

export default ContactCard
