import React from "react";
import { Row, Col } from "react-bootstrap";
import character1 from "./assets/characters/character-1.png";
import character2 from "./assets/characters/character-2.png";
import character3 from "./assets/characters/character-3.png";
import character4 from "./assets/characters/character-4.png";
import character5 from "./assets/characters/character-5.png";
import character6 from "./assets/characters/character-6.png";
import character7 from "./assets/characters/character-7.png";
import character8 from "./assets/characters/character-8.png";
import character9 from "./assets/characters/character-9.png";
import character10 from "./assets/characters/character-10.png";
import character11 from "./assets/characters/character-11.png";
import character12 from "./assets/characters/character-12.png";
import Character from "./Character";

const Characters = () => {
  const allCharacters = [
    {
      name: "John DOe",
      planet: "Alpha",
      friends: 194,
      imgUrl: character1,
      id: 1,
    },
    {
      name: "Jane Dame",
      planet: "Beta",
      friends: 200,
      imgUrl: character2,
      id: 2,
    },
    {
      name: "Mario Mark",
      planet: "Charlie",
      friends: 304,
      imgUrl: character3,
      id: 3,
    },
    {
      name: "Tom Holland",
      planet: "Delta",
      friends: 406,
      imgUrl: character4,
      id: 4,
    },
    {
      name: "Brick Lace",
      planet: "Euphoria",
      friends: 500,
      imgUrl: character5,
      id: 5,
    },
    {
      name: "Clark Ville",
      planet: "Falcon",
      friends: 601,
      imgUrl: character6,
      id: 6,
    },
    {
      name: "John DOe",
      planet: "Alpha",
      friends: 194,
      imgUrl: character7,
      id: 7,
    },
    {
      name: "Jane Dame",
      planet: "Beta",
      friends: 200,
      imgUrl: character8,
      id: 8,
    },
    {
      name: "Mario Mark",
      planet: "Charlie",
      friends: 304,
      imgUrl: character9,
      id: 9,
    },
    {
      name: "Tom Holland",
      planet: "Delta",
      friends: 406,
      imgUrl: character10,
      id: 10,
    },
    {
      name: "Brick Lace",
      planet: "Euphoria",
      friends: 500,
      imgUrl: character11,
      id: 11,
    },
    {
      name: "Clark Ville",
      planet: "Falcon",
      friends: 601,
      imgUrl: character12,
      id: 12,
    },
  ];

  return (
    <>
      <Row className="justify-content-center">
        {allCharacters.map((character) => (
          <Character character={character} />
        ))}
      </Row>
    </>
  );
};

export default Characters;
