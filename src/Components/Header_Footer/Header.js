import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import { CityLogo } from "../ui/icons";

export default class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#98c5e9",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00285e"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div class_name="header_logo">
              <CityLogo link={true} linkTo="/" width="70px" height="70px" />
            </div>
          </div>

          {/* Button for navigating */}
          <Link to="the_team">
            <Button color="inherit">The team</Button>
          </Link>

          <Link to="the_matches">
            <Button color="inherit">The matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}
