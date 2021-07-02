import IntroductionContainer from "features/introduction/components/introduction-container";
import Mouse from "features/introduction/components/mouse";
import React from "react";

function Introduction(props) {
  return (
    <div>
      <IntroductionContainer />
      <Mouse />
    </div>
  );
}

export default Introduction;
