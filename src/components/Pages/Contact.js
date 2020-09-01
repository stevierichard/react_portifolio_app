import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import Container from "@material-ui/core/Container";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Resume from "../../images/resume.PDF";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    // maxWidth: "default",
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 25,
    marginBottom: ".75rem",
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: "70vh",
    maxWidth: "500px",
    maxHeight: "500px",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [state, setState] = useState(true);
  let url = "https://www.linkedin.com/in/steven-richard-b2a42563";
  let url1 = "https://github.com/stevierichard";
  // let img = { Resume };
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Card className={classes.root}>
          <CardContent>
            <List
              component="nav"
              className={classes.root}
              aria-label="mailbox folders"
            >
              <ListItem>
                <ListItemText primary="Contact Info" align="center" />
              </ListItem>
              <Divider />
              <ListItem divider>
                <ListItemText primary="Steven Simon" align="center" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Email: stevierichard1@gmail.com"
                  align="center"
                />
              </ListItem>
              <Divider light />
              <ListItem>
                <ListItemText
                  primary="Phone #: (415) 308 - 4769"
                  align="center"
                />
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" href={url}>
              Linkedin
            </Button>
            <Button variant="contained" color="primary" href={url1}>
              Github
            </Button>
            <Button variant="contained" color="primary" href={Resume}>
              My Resume
            </Button>
          </CardActions>
        </Card>
      </Container>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Developed By
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Steven Richard Simon!
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
};

export default Contact;
