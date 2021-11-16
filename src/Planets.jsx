import React from "react";
import { Row } from "react-bootstrap";
import AddPlanet from "./AddPlanet";
import planet1 from "./assets/planets/planet-1.svg";
import planet2 from "./assets/planets/planet-2.svg";
import planet3 from "./assets/planets/planet-3.svg";
import planet4 from "./assets/planets/planet-4.svg";
import planet5 from "./assets/planets/planet-5.svg";
import planet6 from "./assets/planets/planet-6.svg";
import planet7 from "./assets/planets/planet-7.svg";
import planet8 from "./assets/planets/planet-8.svg";
import planet9 from "./assets/planets/planet-9.svg";
import Planet from "./Planet";

const Planets = () => {
  const allPlanets = [
    {
      name: "Alpha",
      population: 194,
      imageUrl: planet1,
      id: 1,
    },
    {
      name: "Bravo",
      population: 200,
      imageUrl: planet2,
      id: 2,
    },
    {
      name: "Charlie",
      population: 304,
      imageUrl: planet3,
      id: 3,
    },
    {
      name: "Delta",
      population: 406,
      imageUrl: planet4,
      id: 4,
    },
    {
      name: "Echo",
      population: 500,
      imageUrl: planet5,
      id: 5,
    },
    {
      name: "Foxtrot",
      population: 601,
      imageUrl: planet6,
      id: 6,
    },
    {
      name: "Golf",
      population: 723,
      imageUrl: planet7,
      id: 7,
    },
    {
      name: "Hotel",
      population: 809,
      imageUrl: planet8,
      id: 8,
    },
    {
      name: "India",
      population: 911,
      imageUrl: planet9,
      id: 9,
    },
    {
      name: "Juliet",
      population: 1020,
      imageUrl: planet2,
      id: 10,
    },
    {
      name: "Kilo",
      population: 1111,
      imageUrl: planet4,
      id: 11,
    },
    {
      name: "Lima",
      population: 1214,
      imageUrl: planet6,
      id: 12,
    },
  ];

  return (
    <>
      <Row className="justify-content-center">
        {allPlanets.map((planet) => (
          <Planet planet={planet} />
        ))}
        <AddPlanet />
      </Row>
    </>
  );
};

export default Planets;
