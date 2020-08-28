import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

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
    minWidth: 275,
    maxWidth: "default",
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
}));

const Contact = () => {
  const classes = useStyles();
  const [state, setState] = useState(true);
  let url = "https://www.linkedin.com/in/steven-richard-b2a42563";
  let url1 = "https://github.com/stevierichard";
  let img = "./public/images/resume";
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Contact
          </Typography>
          <Typography variant="h6" component="h6">
            Steven Simon
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Email Address:
            <br />
            stevierichard1@gmail.com
          </Typography>
          <Typography variant="body2" component="p">
            Phone Number :
            <br />
            +1 (415) 308 4769
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" href={url}>
            Linkedin
          </Button>
          <Button variant="contained" color="primary" href={url1}>
            Github
          </Button>
          <Button variant="contained" color="primary" href={img}>
            My Resume
          </Button>
        </CardActions>
      </Card>
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
