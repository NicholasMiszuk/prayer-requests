import React from "react";
import useStyles from "./styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Link,
  Button,
} from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

export default function Layout({ children }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  return (
    <>
      <div className={classes.grow}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px -1px rgb(0 0 0 / 25%)",
          }}
          elevation={0}
        >
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Prayer Request
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button href="/home" variant="outlined">Home</Button>
              <Button href="/" variant="outlined">Prayer Requests</Button>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </>
  );
}
