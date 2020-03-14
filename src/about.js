import React, { Fragment } from "react";
import PropTypes from "prop-types";

//MaterialUI comps imported here
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";

import SkillsList from "./skills_list";

const styles = theme => ({
  about_container: {
    maxWidth: 950,
    position: "relative",
    top: 100,
    marginLeft: 80,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 20
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: 40
    },
    [theme.breakpoints.up("lg")]: {
      margin: "auto"
    }
  }
});

const AboutPage = props => {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.about_container}>
        <Typography variant="h2" paragraph={true}>
          About
        </Typography>
        <div>
          <Typography variant="subtitle1" paragraph={true}>
            I'm currently a year two student at Maseno University pursuing a bachelor's
            degree in Information Technology.I've learnt several programming languages 
            and this has been a success through the help of friends and the University resources. 
          </Typography>
          <Typography variant="subtitle1" paragraph={true}>
            I primarily use React to build responsive webapps.Besides React,I have skills in
            Bootstrap,CSS and Material-UI design.Apparently,picking up a new framework or language isn't
            a problem for me.
          </Typography>
          <Typography variant="subtitle1" paragraph={true}>
            I love working as a team as much as I do individually.
          </Typography>
        </div>
        <Divider variant="middle" />
        <SkillsList />
      </div>
    </Fragment>
  );
};

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutPage);
