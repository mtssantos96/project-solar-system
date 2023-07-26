import React from 'react';
import PropsTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <div className="title"><h2>{headline}</h2></div>;
  }
}

Title.propTypes = {
  headline: PropsTypes.string.isRequired,
};

export default Title;
