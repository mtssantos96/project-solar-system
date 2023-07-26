import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetLink } = this.props;
    return (
      <div
        className="tooltip"
        data-tooltip="Clique para saber mais."
      >
        <div className={ `planet-card card${planetName}` } data-testid="planet-card">
          <a href={ planetLink } target="_blank" rel="noreferrer">
            <img
              className={ `img-planet ${planetName}` }
              src={ planetImage }
              alt={ `Planeta ${planetName}` }
            />
            <p className="p-planets" data-testid="planet-name">{planetName}</p>
          </a>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetLink: PropTypes.string.isRequired,
};

export default PlanetCard;
