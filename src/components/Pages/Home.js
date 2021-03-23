import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import OfficePic from "../../images/steve.jpeg";

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
    maxWidth: "default",
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

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={OfficePic}
              title="steven image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                About
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Full Stack Web Developer with a background and experience in business with a passion for technology. Recently completed a bootcamp course at UC Berkeley Extension University where I developed skills in building front-end websites from scratch with ready-made frameworks, creating full-stack single-page web applications with RESTful routes and Ajax methods and generating dynamic content and implement user-authentication schemes by incorporating two types of databases—MySQL and MongoDB. 
              </Typography>
            </CardContent>
          </CardActionArea>
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

export default Home;
