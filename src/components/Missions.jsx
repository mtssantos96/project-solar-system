import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import MissionsData from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <section className="missions-container" data-testid="missions">
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
      </section>
    );
  }
}

export default Missions;
