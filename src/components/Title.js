import React from 'react';
import PropsType from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2>{ headline }</h2>;
  }
}

Title.PropsType = {
  headline: PropsType.string.isRequired,
};

export default Title;
