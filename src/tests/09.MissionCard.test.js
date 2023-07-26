import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionCard from '../components/MissionCard';

const missionTest = {
  year: "2021",
  name: 'Siberiano',
  country: 'URSS',
  destination: 'Lua',
  link: 'path-to-link'
};

describe('9 - Crie um componente chamado `MissionCard`', () => {
  it('Será validado se o componente `<MissionCard />` é renderizado', () => {
    const { year, name, country, destination, link } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
        link={ link }
      />,
    );
  });

  it('Será validado se o componente `<MissionCard />` possui uma div com o atributo `data-testid="mission-card"`', () => {
    const { year, name, country, destination, link } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
        link={ link }
      />,
    );

    expect(screen.getByTestId("mission-card")).toBeInTheDocument();
  });

  it('Será validado se é renderizado o texto recebido pela prop `name`', () => {
    const { year, name, country, destination, link } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
        link={ link }
      />,
    );

    const missionName = screen.getByTestId('mission-name');

    expect(missionName).toHaveTextContent('Siberiano');
  });

  it('Será validado se é renderizado o texto recebido pela prop `year`', () => {
    const { year, name, country, destination, link } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
        link={ link }
      />,
    );

    const missionYear = screen.getByTestId('mission-year');

    expect(missionYear).toHaveTextContent("2021");
  });
  
  it('Será validado se é renderizado o texto recebido pela prop `country`', () => {
    const { year, name, country, destination, link } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
        link={ link }
      />,
    );

    const missionCountry = screen.getByTestId('mission-country');

    expect(missionCountry).toHaveTextContent('URSS');
  });
  
  it('Será validado se é renderizado o texto recebido pela prop `destination`', () => {
    const { year, name, country, destination, link } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
        link={ link }
      />,
    );

    const missionDestination = screen.getByTestId('mission-destination');

    expect(missionDestination).toHaveTextContent('Lua');
  });
});
