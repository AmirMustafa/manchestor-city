import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home/index";
import SignIn from "./Components/signin";
import Dashboard from "./Components/admin/Dashboard";
import AdminMatches from "./Components/admin/matches";
import AddEditMatch from "./Components/admin/matches/addEditMatch";
import AdminPlayers from "./Components/admin/players";
import AddEditPlayers from "./Components/admin/players/addEditPlayers";
import TheTeam from "./Components/theTeam";
import TheMatches from "./Components/theMatches";

import NotFound from "./Components/ui/notFound";

import PrivateRoutes from "./Components/authRoutes/privateRoutes";
import PublicRoutes from "./Components/authRoutes/publicRoutes";
const Routes = props => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoutes
          {...props}
          exact
          component={Dashboard}
          path="/dashboard"
        />

        <PrivateRoutes
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />

        <PrivateRoutes
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatch}
        />

        <PrivateRoutes
          {...props}
          path="/admin_matches/edit_match"
          exact
          component={AddEditMatch}
        />

        <PrivateRoutes
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />

        <PrivateRoutes
          {...props}
          path="/admin_players/add_players/:id"
          exact
          component={AddEditPlayers}
        />

        <PrivateRoutes
          {...props}
          path="/admin_players/add_players"
          exact
          component={AddEditPlayers}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          exact
          component={Home}
          path="/"
        />

        <PublicRoutes
          {...props}
          restricted={true}
          exact
          component={SignIn}
          path="/sign_in"
        />

        <PublicRoutes
          {...props}
          restricted={false}
          exact
          component={TheTeam}
          path="/the_team"
        />

        <PublicRoutes
          {...props}
          restricted={false}
          exact
          component={TheMatches}
          path="/the_matches"
        />

        <PublicRoutes {...props} restricted={false} component={NotFound} />

        {/* <Route exact component={Dashboard} path="/dashboard" />
        <Route exact component={Home} path="/" />
        <Route exact component={SignIn} path="/sign_in" /> */}
      </Switch>
    </Layout>
  );
};

export default Routes;
