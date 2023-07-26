import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Sistema Solar</h1>
      </header>);
  }
}

Header.propTypes = PropTypes.string.isRequired;

export default Header;
