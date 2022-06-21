import React from 'react';
import PropsTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: PropsTypes.string.isRequired,
};

export default Title;
