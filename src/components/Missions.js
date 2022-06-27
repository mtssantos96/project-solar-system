import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import MissionsData from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {MissionsData.map((m) => (
          <MissionCard
            key={ m.name }
            name={ m.name }
            year={ m.year }
            country={ m.country }
            destination={ m.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
