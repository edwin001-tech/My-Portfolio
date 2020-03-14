import React from "react";
import PropTypes from "prop-types";

//MaterialUI comps imported here
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//MaterialUI icons imported here
import PhonelinkIcon from "@material-ui/icons/Phonelink";
import BuildIcon from "@material-ui/icons/Build";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";

const responsiveSkills = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Javascript",
];

const webAppsSkills = [
  "React",
  "MaterialUI Design",
  "node.js",
  "Express.js",
  
  
];

const toolsList = ["Git", "Stack Exchange", "Visual Studio code", "Stack Overflow"];

const styles = theme => ({
  skill_container: {
    marginTop: 30
  },
  skill_header: {
    textAlign: "center",
    [theme.breakpoints.only("sm")]: {
      marginLeft: 130,
      textAlign: "left"
    }
  },
  skills_icon: {
    display: "inline-block",
    marginLeft: 7,
    position: "relative",
    top: 5
  }
});

const SkillsList = props => {
  const { classes } = props;
  return (
    <div className={classes.skill_container}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            paragraph={true}
            className={classes.skill_header}
          >
            Skills and tools
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">
            Responsive web design
            <div className={classes.skills_icon}>
              <PhonelinkIcon />
            </div>
          </Typography>
          <List>
            {responsiveSkills.map(skill => (
              <ListItem key={skill}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">
            Web apps
            <div className={classes.skills_icon}>
              <ImportantDevicesIcon />
            </div>
          </Typography>
          <div />
          <List>
            {webAppsSkills.map(skill => (
              <ListItem key={skill}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">
            Dev tools
            <div className={classes.skills_icon}>
              <BuildIcon />
            </div>
          </Typography>
          <List>
            {toolsList.map(tool => (
              <ListItem key={tool}>
                <ListItemText primary={tool} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

SkillsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SkillsList);
