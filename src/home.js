import React, { Fragment } from "react";
import PropTypes from "prop-types";


//MaterialUI comps imported here
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Fab from "@material-ui/core/Fab";

//MaterialUI icons imported here
import EmailIcon from "@material-ui/icons/Email";

import { GHlogo } from "./projData/gh_logo";

const styles = theme => ({
  header: {
    position: "relative",
    top: 200
  },

  subtitle: {
    marginTop: 15
  },
  marginButton: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  anchor_tag: {
    textDecoration: "none",
    color: "white",
    marginLeft: 8
  },
  fabButtonContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 15
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <Grid container justify="center" className={classes.header}>
      <header>
        <Typography variant="h1" align="center" color="textPrimary">
          Hello, I'm Edwin.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          className={classes.subtitle}
        >
          React Developer
        </Typography>
        <Hidden mdUp>
          <div className={classes.fabButtonContainer}>
            <Fab
              variant="extended"
              color="secondary"
              aria-label="Github"
              className={classes.marginButton}
            >
              <GHlogo />
              <a
                className={classes.anchor_tag}
                href="https://github.com/edwin001-tech"
                target="_blank"
                rel="noopener"
              >
                Github
              </a>
            </Fab>
            <Fab
              variant="extended"
              color="secondary"
              aria-label="Github"
              className={classes.marginButton}
            >
              <EmailIcon className={classes.extendedIcon} />
              <span style={{ color: "white" }}>edwinshitakwa8@gmail.com</span>
            </Fab>
          </div>
        </Hidden>
      </header>

    </Grid>
    
   
    
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
