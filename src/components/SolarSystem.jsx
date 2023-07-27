import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <section className="planets-container" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
              planetLink={ planet.link }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
