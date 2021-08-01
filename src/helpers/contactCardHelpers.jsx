import React from 'react'

import { SkeletonContactCard, ContactCard } from '../components'

export const generateSkeletonCards = (count = 10) => {
  const cards = []
  for (let i = 0; i < count; i++) {
    cards.push(<SkeletonContactCard id={`${i}`} />)
  }

  return cards
}

export const generateContactCards = (contacts) =>
  contacts?.map((contact, index) => (
    <ContactCard contact={contact} id={index} />
  ))
