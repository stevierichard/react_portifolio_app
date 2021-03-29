import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
// import "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  title: {
    flexGrow: 1,
  },
  navlink: {
    color: "#fff",
  },
  navlinkcss: {
    textDecoration: "none",
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            <Link to="/about" className={classes.navlinkcss}>
              <Button className={classes.navlink}>Steven R Simon</Button>
            </Link>
          </Typography>

          <Link to="/about" className={classes.navlinkcss}>
            <Button className={classes.navlink}>About</Button>
          </Link>

          <Link to="/portfolio" className={classes.navlinkcss}>
            <Button className={classes.navlink}>Portfolio</Button>
          </Link>
          <Link to="/contact" className={classes.navlinkcss}>
            <Button className={classes.navlink}>Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
