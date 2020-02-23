import React from "react";
import { Link } from "react-router-dom";

import mcitylogo from "../../Resources/images/logos/manchester_city_logo.png";

export const CityLogo = props => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${mcitylogo})`
      }}
    ></div>
  );
  // const template = <div>Logo</div>;

  // Get logo has link get it otherwise default
  if (props.link) {
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
