import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import MissionsData from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <div className="missions-container">
          <Title headline="Missões" />
          <div className="missions-cards">
            {MissionsData.map((mission) => (
              <MissionCard
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
                link={ mission.link }
              />))}
          </div>
        </div>
      </div>
    );
  }
}

export default Missions;
