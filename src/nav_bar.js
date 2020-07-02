import React, { Component, Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

//MaterialUI comps imported here
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Divider from "@material-ui/core/ClickAwayListener";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

//MaterialUI icons imported here
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CodeIcon from "@material-ui/icons/Code";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import CreateIcon from "@material-ui/icons/Create";
import EmailIcon from "@material-ui/icons/Email";

import { GHlogo } from "./projData/gh_logo";

const drawerWidth = 250;

const styles = theme => ({
  root: {
    display: "flex"
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  list: {
    width: 250
  },
  menu_items: {
    marginLeft: theme.spacing.unit * 2.2
  },
  menu_icons: {
    color: theme.palette.secondary.main
  },

  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },

  hide: {
    display: "none"
  },

  themeChangerIcon: {
    marginLeft: -15
  },
  popup_text: {
    margin: theme.spacing.unit * 2
  },

  anchor_tag: {
    color: theme.palette.secondary.main
  },

  anchor_tagHover: {
    "&:hover": {
      textDecoration: "none"
    }
  }
});

//Tracks the current theme no
let count = 0;

class NavBar extends Component {
  handleOpenDrawer = () => {
    this.props.onDrawerChange(true);
  };

  handleCloseDrawer = () => {
    this.props.onDrawerChange(true);
  };

  handleClick = event => {
    this.props.onAnchorElChange(event.currentTarget);
  };

  handleClose = () => {
    this.props.onAnchorElChange(null);
  };

  handleThemeChange = () => {
    //let's change theme by increasing order
    if (count >= 4) {
      count = -1;
    }
    count++;
    this.props.changeTheme(count);
  };

  //This func handles props for Link and Icon for ListItemIcon
  handleDrawerItems = (text, link) => {
    let items_props;
    switch (text) {
      case "Home":
        link ? (items_props = "/") : (items_props = <ViewAgendaIcon />);
        break;
      case "About":
        link ? (items_props = "/About") : (items_props = <AccountBoxIcon />);
        break;
      case "Portfolio":
        link ? (items_props = "/Portfolio") : (items_props = <CodeIcon />);
        break;
      default:
        items_props = null;
    }
    return items_props;
  };

  render() {
    const { classes, open_drawer, anchorEl } = this.props;
    const open = Boolean(anchorEl);
    const Android = process.browser && /iPad|iPhone|iPod|Android/.test(navigator.userAgent);

    return (
      <Fragment>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open_drawer
          })}
        >
     <ToolBar>  
        
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleOpenDrawer}
              className={classNames(
                classes.menuButton,
                open_drawer && classes.hide
              )}
            >
            <MenuIcon/>
            </IconButton>
            
            <Grid container justify="flex-start">
              <Link
                component={RouterLink}
                to="/"
                variant="h6"
                color="textSecondary"
                className={classes.menu_items}
              >
                Home
              </Link>
              <Hidden only={["xs", "sm"]}>
                <Link
                  component={RouterLink}
                  variant="h6"
                  to="/About"
                  color="textSecondary"
                  className={classes.menu_items}
                >
                  About
                </Link>
                <Link
                  component={RouterLink}
                  to="/Portfolio"
                  variant="h6"
                  color="textSecondary"
                  className={classes.menu_items}
                >
                  Portfolio
                </Link>
              </Hidden>
            </Grid>
            <Grid container justify="flex-end">
              <IconButton
                className={classes.menu_icons}
                onClick={this.handleThemeChange}
              >
                <CreateIcon />
              </IconButton>
              <Hidden only={["xs", "sm"]}>
                <IconButton className={classes.menu_icons}>
                  <a
                    href="https://github.com/edwin001-tech"
                    target="_blank"
                    rel="noopener"
                    className={classes.anchor_tag}
                    style={{ marginTop: 10 }}
                  >
                    <GHlogo />
                  </a>
                </IconButton>

                <IconButton
                  aria-owns={open ? "simple-popper" : undefined}
                  aria-haspopup="true"
                  variant="contained"
                  onClick={this.handleClick}
                  className={classes.menu_icons}
                >
                  <EmailIcon />
                </IconButton>
                <Popover
                  id="simple-popper"
                  open={open}
                  anchorEl={anchorEl}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                >
                  <Typography className={classes.popup_text}>
                    edwinshitakwa8@gmail.com
                  </Typography>
                </Popover>
              </Hidden>
            </Grid>
            </ToolBar>
        </AppBar>
        <ClickAwayListener onClickAway={this.handleCloseDrawer}>
          <SwipeableDrawer
            variant="persistent"
            anchor="left"
            open={open_drawer}
            onOpen={this.handleOpenDrawer}
            onClose={this.handleCloseDrawer}
            disableBackdropTransition={!Android}
            disableDiscovery={Android}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.handleCloseDrawer}
              onKeyDown={this.handleCloseDrawer}
            >
              <div className={classes.list}>
                <List>
                  {["Home", "About", "Portfolio"].map(text => (
                    <ListItem Button key={text}>
                      <ListItemIcon className={classes.menu_icons}>
                        {this.handleDrawerItems(text, false)}
                      </ListItemIcon>
                      <Link
                        component={RouterLink}
                        to={this.handleDrawerItems(text, true)}
                        className={classes.anchor_tagHover}
                      >
                        <ListItemText primary={text} />
                      </Link>
                    </ListItem>
                  ))}
                  <ListItem button onClick={this.handleThemeChange}>
                    <ListItemIcon className={classes.menu_icons}>
                      <CreateIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={"Change theme"}
                      className={classes.themeChangerIcon}
                    />
                  </ListItem>
                </List>
              </div>
            </div>
          </SwipeableDrawer>
        </ClickAwayListener>
      </Fragment>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  open_drawer: PropTypes.bool.isRequired,
  anchorEl: PropTypes.oneOfType([() => null, PropTypes.bool]),
  onDrawerChange: PropTypes.func.isRequired,
  onAnchorElChange: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);
