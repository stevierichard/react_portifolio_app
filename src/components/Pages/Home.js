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
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    marginTop: "15px",
    marginBottom: "15px",
  },
  media: {
    height: "70vh",
    maxWidth: "500px",
    maxHeight: "500px",
  },
  footer: {
    backgroundColor: "#3F50B5",
    padding: theme.spacing(1),
    color: "white",
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
              {/* <Typography gutterBottom variant="h5" component="h2">
                About
              </Typography> */}
              <Typography variant="body2" color="textSecondary" component="p">
                Full Stack Enterprise Java 8 and JavaScript Web Developer with a
                background and experience in business with a passion for
                technology. Completed bootcamp course for Enterprise Java 8 and
                Javascript languages at Southern Methodist University and UC
                Berkeley Extension where I developed skills in building
                front-end and back-end websites and apps from scratch with
                various libraries and frameworks, creating full-stack
                single-page web applications with React and generating dynamic
                content and implement user-authentication schemes by
                incorporating two types of databases—MySQL and MongoDB.
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
          color="white"
          component="p"
        >
          Steven Richard Simon
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
};

export default Home;
