/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";



import AboutPage from "./about";
import Portfolio from "./portfolio";
import NavBar from "./nav_bar";
import Home from "./home";

//import themes here
import { themeYellow } from "./projData/themes";
import { themeMing } from "./projData/themes";
import { themePink } from "./projData/themes";
import { themeBlue } from "./projData/themes";
import { themeGreen } from "./projData/themes";
import { themeBlack } from "./projData/themes";



const styles = theme => {
  root: {
    flexGrow: 1;
  }
};

// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({});

class App extends Component {
  state = {
    anchorEl: null,
    open_drawer: false,
    currentTheme: themeMing,
    rightDrawer: false
  };

  changeTheme = themeNo => {
    const themesArr = [
      themeBlack,
      themeBlue,
      themeMing,
      themePink,
      themeYellow
    ];
    this.setState({ currentTheme: themesArr[themeNo] });
  };

  onDrawerChange = value => {
    this.setState({ open_drawer: value, rightDrawer: value });
  };

  onAnchorElChange = value => {
    this.setState({ anchorEl: value });
  };

  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <MuiThemeProvider theme={this.state.currentTheme}>
          <div className={classes.root}>
            <CssBaseline />
            <NavBar
              {...this.state}
              onDrawerChange={this.onDrawerChange}
              onAnchorElChange={this.onAnchorElChange}
              changeTheme={this.changeTheme}
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={AboutPage} />
              <Route path="/Portfolio" component={Portfolio} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);

