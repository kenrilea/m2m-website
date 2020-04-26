import React from "react";

import sampleText from "../../helpers/sampleText.js";

export default class LandingPage extends React.Component {
  render = () => {
    return (
      <div className={"Page_Default Paragraph_Default"}>
        {sampleText + sampleText + sampleText}
      </div>
    );
  };
}
