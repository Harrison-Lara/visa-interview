import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { SkeletonContactCard, ContactCard } from '../components'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  cardGrid: PropTypes.string.isRequired,
}

export const generateSkeletonCards = (count = 10) => {
  const cards = []
  for (let i = 0; i < count; i++) {
    cards.push(<SkeletonContactCard id={`${i}`} />)
  }

  return cards
}

export const generateContactCards = (state) =>
  state?.contacts?.map((contact, index) => (
    <ContactCard contact={contact} id={index} />
  ))
