import { React } from "react";
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
import char from "./assets/characters/character-1.png";
import Planet from "./Planet";
import CreatePlanet from "./CreatePlanet";

const Planets = () => {
  const allPlanets = [
    {
      name: "Alpha",
      population: 194,
      imageUrl: planet1,
      description:
        "Alpha Oh an am frankness be necessary earnestly advantage estimable extensive. Five he wife gone ye. Mrs suffering sportsmen earnestly any. In am do giving to afford parish settle easily garret.",
      id: 1,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "Bravo",
      population: 200,
      imageUrl: planet2,
      description:
        "Bravo Connection too unaffected expression led son possession. New smiling friends and her another. Leaf she does none love high yet. Snug love will up bore as be. Pursuit man son musical general pointed. It surprise informed mr advanced do outweigh.",
      id: 2,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "Charlie",
      population: 304,
      imageUrl: planet3,
      description:
        "Charlie Ask especially collecting terminated may son expression. Extremely eagerness principle estimable own was man. Men received far his dashwood subjects new. My sufficient surrounded an companions dispatched in on.",
      id: 3,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "Delta",
      population: 406,
      imageUrl: planet4,
      description:
        "Delta Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an.",
      id: 4,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "Echo",
      population: 500,
      imageUrl: planet5,
      description:
        "Echo Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of. Now improving and one sincerity intention allowance commanded not.",
      id: 5,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "Foxtrot",
      population: 601,
      imageUrl: planet6,
      description:
        "Foxtrot Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing females so improve in picture.",
      id: 6,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "Golf",
      population: 723,
      imageUrl: planet7,
      description:
        "Golf Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably.",
      id: 7,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "Hotel",
      population: 809,
      imageUrl: planet8,
      description:
        "Hotel Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested especially reasonable off one. Wonder bed elinor family secure met. It want gave west into high no in.",
      id: 8,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "India",
      population: 911,
      imageUrl: planet9,
      description:
        "India Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight.",
      id: 9,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "Juliet",
      population: 1020,
      imageUrl: planet2,
      description:
        "Juliet To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses.",
      id: 10,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "Kilo",
      population: 1111,
      imageUrl: planet4,
      description:
        "Kilo Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect. Supply as so period it enough income he genius.",
      id: 11,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
    {
      name: "Lima",
      population: 1214,
      imageUrl: planet6,
      description:
        "Lima Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is.",
      id: 12,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          img: char,
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          img: char,
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          img: char,
        },
        {
          name: "Ariene Jack",
          friends: 3,
          img: char,
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          img: char,
        },
      ],
    },
  ];

  console.log(allPlanets);

  return (
    <>
      <Row className="justify-content-center">
        {allPlanets &&
          allPlanets.map((planet) => (
            <>
              <Planet planet={planet} />
            </>
          ))}
        {allPlanets.length === 0 && <CreatePlanet />}
        <AddPlanet />
      </Row>
    </>
  );
};

export default Planets;
