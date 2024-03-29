import React from "react";
import { ActorCard } from "./ActorCard";

import { FlexGrid } from "../styled";

import IMAGE_NOT_FOUND from "../../images/not-found.png";

const actorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          id={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathDay={person.deathDay}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </FlexGrid>
  );
};

export default actorGrid;
