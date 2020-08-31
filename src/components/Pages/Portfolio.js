import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import StockTrackerPic from "../../images/StockTracker.jpg";
import WeatherPic from "../../images/weather.jpg";
import PwGenPic from "../../images/password_generator.jpg";
import CalenderPic from "../../images/calender.jpg";
import ReadmePic from "../../images/readme.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Stock Tracker App",
    // imgPath: "./images/StockTracker.jpg",
    imgPath: StockTrackerPic,
  },
  {
    label: "Weather App",
    // imgPath: "./images/weather.jpg",
    imgPath: WeatherPic,
  },
  {
    label: "Password Generator App",
    // imgPath: "./images/password_generator.jpg",
    imgPath: PwGenPic,
  },
  {
    label: "Calender App",
    // imgPath: "./images/calender.jpg",
    imgPath: CalenderPic,
  },
  {
    label: "Readme Code",
    // imgPath: "./images/readme.jpg",
    imgPath: ReadmePic,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: "50vh",
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  let url = "https://github.com/stevierichard/StockTracker";
  let url1 = "https://github.com/stevierichard/WeatherDashboard";
  let url2 = "https://github.com/stevierichard/PasswordGenerator";
  let url3 = "https://github.com/stevierichard/-DayPlanner";
  let url4 = "https://github.com/stevierichard/readMeGenerator";
  let url5 = "https://github.com/stevierichard/fitness_tracker";

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <React.Fragment>
      <Container className={classes.container}>
        <div className={classes.root}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
          <CardActions>
            <Button variant="contained" color="primary" href={url}>
              StockTracker
            </Button>
            <Button variant="contained" color="primary" href={url1}>
              Weather
            </Button>
            <Button variant="contained" color="primary" href={url2}>
              Password
            </Button>
          </CardActions>
          <CardActions>
            <Button variant="contained" color="primary" href={url3}>
              Calender
            </Button>
            <Button variant="contained" color="primary" href={url4}>
              ReadMe
            </Button>
            <Button variant="contained" color="primary" href={url5}>
              fitnessTracker
            </Button>
          </CardActions>
        </div>
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

export default Portfolio;
