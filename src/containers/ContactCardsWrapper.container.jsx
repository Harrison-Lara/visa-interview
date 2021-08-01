import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  title: {
    color: '#000',
  },
}))

export const ContactCardsWrapper = ({ children }) => {
  const { cardGrid } = useStyles()
  return (
    <Container className={cardGrid}>
      <Grid container spacing={4}>
        {children}
      </Grid>
    </Container>
  )
}

ContactCardsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContactCardsWrapper
