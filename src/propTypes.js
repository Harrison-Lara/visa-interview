import PropTypes from 'prop-types'

export const contactShape = PropTypes.shape({
  name: {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  },
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    large: PropTypes.string.isRequired,
  }).isRequired,
  login: {
    uuid: PropTypes.string.isRequired,
  },
}).isRequired
