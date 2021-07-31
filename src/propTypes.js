import PropTypes from 'prop-types'

export const contactShape = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  image: PropTypes.string,
}).isRequired
