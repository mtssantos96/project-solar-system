import React from 'react';
import PropTypes from 'prop-types';
import { FaCalendarAlt, FaMapMarkerAlt, FaFlag } from 'react-icons/fa';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination, link } = this.props;
    return (
      <div
        className="tooltip"
        data-tooltip="Clique para saber mais."
      >
        <a
          href={ link }
          target="_blank"
          rel="noreferrer"
          className="mission-card"
          data-testid="mission-card"
        >
          <p className="mission-name" data-testid="mission-name">{name}</p>
          <div className="mission-info">
            <div className="mission-info-container">
              <FaCalendarAlt />
              <p className="mission-year" data-testid="mission-year">{year}</p>
            </div>
            <div className="mission-info-container">
              <FaMapMarkerAlt />
              <p className="mission-country" data-testid="mission-country">{country}</p>
            </div>
            <div className="mission-info-container">
              <FaFlag />
              <p
                className="mission-dest"
                data-testid="mission-destination"
              >
                {destination}

              </p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MissionCard;
