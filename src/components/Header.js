import React from 'react';
import PropType from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Sistema Solar</h1>
      </header>);
  }
}

Header.PropType = PropType.string.isRequired;

export default Header;
