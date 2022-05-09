// import React from "react";
// import emailjs from "emailjs-com";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faYoutube,
//   faFacebook,
//   faInstagram,
//   faWhatsapp,
// } from "@fortawesome/free-brands-svg-icons";
// // require("dotenv").config({ path: "/.env" });
// // require("dotenv").config();

// export default function Contact() {
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "gmail",
//         "template_39vst28",
//         e.target,
//         "user_YpDZnhJTKFj5fwvEKx7Db"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   }

//   return (
//     <div>
//       <div className="container">
//         <form onSubmit={sendEmail}>
//           <div className="row pt-5 mx-auto">
//             <div className="col-8 form-group mx-auto">
//               <h5>Write to us:</h5>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//                 name="name"
//               />
//             </div>
//             <div className="col-8 form-group pt-2 mx-auto">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email Address"
//                 name="email"
//               />
//             </div>
//             <div className="col-8 form-group pt-2 mx-auto">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Subject"
//                 name="subject"
//               />
//             </div>
//             <div className="col-8 form-group pt-2 mx-auto">
//               <textarea
//                 className="form-control"
//                 id=""
//                 cols="30"
//                 rows="8"
//                 placeholder="Your message"
//                 name="message"
//               ></textarea>
//             </div>
//             <div className="col-8 pt-3 mx-auto">
//               <input
//                 type="submit"
//                 className="btn btn-info"
//                 value="Send Message"
//               ></input>
//             </div>
//           </div>
//         </form>
//       </div>
//       <br />
//       <div className="social-container">
//         <h6 className="social-title">@follow us on below social media</h6>

//         <a
//           href="https://www.youtube.com/channel/UCpeU5t2DJsumXFf2V4uucgQ"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="youtube social"
//         >
//           <FontAwesomeIcon icon={faYoutube} size="2x" />
//         </a>
//         <a
//           href="https://www.facebook.com/Starcallaevents"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="facebook social"
//         >
//           <FontAwesomeIcon icon={faFacebook} size="2x" />
//         </a>
//         <a
//           href="https://www.instagram.com/starcallaevents/?hl=en"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="instagram social"
//         >
//           <FontAwesomeIcon icon={faInstagram} size="2x" />
//         </a>
//         <a
//           href="https://l.instagram.com/?u=http%3A%2F%2Fwa.me%2F255746666180&e=ATMWLkRTn4w2cf8R11c1JhsynR6CxLmQgXkWflt3hqtobwS3VJm3RIeZE9PY-l62voEZa4TbY4rQtooe9ANHVwnSyPQENMjae6zveA&s=1"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="whatsapp social"
//         >
//           <FontAwesomeIcon icon={faWhatsapp} size="2x" />
//         </a>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { useState } from "react";
import Container from "@material-ui/core/Container";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Resume from "../../images/Steven Richard Simon resume.pdf";

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
    backgroundColor: "#3F50B5",
    padding: theme.spacing(2),
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

const Contact = () => {
  const classes = useStyles();
  // const [state, setState] = useState(true);
  let url = "https://www.linkedin.com/in/steven-richard-simon-b2a42563";
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
                <ListItemText primary="Contact Me Vi`a" align="center" />
              </ListItem>
              <Divider />
              <ListItem divider>
                <ListItemText primary="Steven Richard Simon" align="center" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Email: lekibabu@gmail.com"
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
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={url}
            >
              Linkedin
            </Button>
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={url1}
            >
              Github
            </Button>
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={Resume}
            >
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

export default Contact;
