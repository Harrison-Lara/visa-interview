import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import EditIcon from '@material-ui/icons/Edit'

import { DeleteDialog } from './index'

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
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
  skeletonEditIcon: {
    marginRight: '1rem',
  },
}))

export const SkeletonContactCard = ({ id }) => {
  const { card, info, content, actions, skeletonEditIcon } = useStyles()

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card className={card} id={id} key={id}>
        <Skeleton variant="rect" width="50%">
          <div style={{ paddingTop: '30%' }} />
        </Skeleton>
        <div className={info}>
          <CardContent className={content} id="cardContent">
            <Skeleton width="75%">
              <Typography>.</Typography>
            </Skeleton>
            <Skeleton width="75%">
              <Typography>.</Typography>
            </Skeleton>
          </CardContent>
          <div className={actions}>
            <Skeleton width="15%" className={skeletonEditIcon}>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Skeleton>
            <Skeleton width="15%">
              <DeleteDialog />
            </Skeleton>
          </div>
        </div>
      </Card>
    </Grid>
  )
}

SkeletonContactCard.propTypes = {
  id: PropTypes.string.isRequired,
}

export default SkeletonContactCard
