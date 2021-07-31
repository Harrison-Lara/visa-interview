import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))

export const ContactCard = ({
  id,
  firstName,
  lastName,
  phoneNumber,
  image,
}) => {
  const { card, info, content } = useStyles()

  const fullName = `${firstName} ${lastName}`
  const key = `Card-${id}`

  return (
    <Grid item key={card} xs={12} sm={6} md={4}>
      <Card className={card} id={key} key={key}>
        <CardMedia
          id={`photo-${id}`}
          component="img"
          src={image}
          title={`${fullName}-photo`}
          square="true"
        />
        <div className={info}>
          <CardContent className={content} id="cardContent">
            <Typography component="h5" variant="h5" id="firstAndLastNameText">
              {fullName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              id="phoneNumberText"
            >
              {phoneNumber}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  )
}

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  image: PropTypes.string,
}

ContactCard.defaultProps = {
  image: '',
  lastName: '',
  phoneNumber: '',
}

export default ContactCard
