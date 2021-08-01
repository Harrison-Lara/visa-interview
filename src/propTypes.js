import PropTypes from 'prop-types'

export const contactShape = PropTypes.shape({
  name: {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  },
  phone: PropTypes.string,
  email: PropTypes.string,
  picture: PropTypes.shape({
    large: PropTypes.string,
  }),
  login: {
    uuid: PropTypes.string,
  },
}).isRequired
