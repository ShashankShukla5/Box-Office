import React from "react";
import Navs from "./Navs";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for an movie or an actor"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
