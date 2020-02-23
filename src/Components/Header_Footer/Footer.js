import React, { Component } from "react";
import { CityLogo } from "../ui/icons";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bck_blue">
        <div className="footer_logo">
          <CityLogo link={true} linkTo="/" width="70px" height="70px" />
        </div>
        <div className="footer_discl">
          Machester city 2020. All rights reserved.
        </div>
      </footer>
    );
  }
}
