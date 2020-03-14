import React from "react";
import PropTypes from "prop-types";

//MaterialUI comps imported here
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import { projectData } from "./projData/portfolio_data";

const styles = theme => ({
  card_container: {
    position: "relative",
    top: 100,
    margin: "auto",
    width: "90%"
  },
  card: {
    maxWidth: 400,
    backgroundColor: theme.palette.secondary.main
  },
  anchor_tag: {
    textDecoration: "none"
  }
});

const Portfolio = props => {
  const { classes } = props;

  const mapPortfolioData = portData => {
    return portData.portflio_data.map(port_data => {
      const { proj_title, proj_desc, proj_url, github_url } = port_data.data;
      const { classes } = props;
      return (
        <Grid item xs={12} sm={6} md={4} key={proj_title}>
          <Card
            className={classes.card}
            style={{ marginTop: "10px", marginLeft: "10px" }}
          >
            <CardContent>
              <Typography variant="h4" align="center" paragraph={true}>
                {proj_title}
              </Typography>
              <Typography variant="subtitle1" paragraph={true}>
                {proj_desc}
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href={github_url}
                target="_blank"
                rel="noopener"
                className={classes.anchor_tag}
              >
                <Button size="small">Repo</Button>
              </a>
              {proj_url ? (
                <a
                  href={proj_url}
                  target="_blank"
                  rel="noopener"
                  className={classes.anchor_tag}
                >
                  <Button size="small">App</Button>
                </a>
              ) : null}
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Grid container align="center" className={classes.card_container}>
      {projectData.map(mapPortfolioData)}
    </Grid>
  );
};

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Portfolio);
