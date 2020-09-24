import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Tabs, Tab, Tooltip, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import FaceIcon from "@material-ui/icons/Face";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AppsIcon from "@material-ui/icons/Apps";
import Home from "./components/Home";
import Projects from "./components/Projects"
import About from "./components/About";
import NotFound from "./components/NotFound"

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Tabs>
        <Tooltip title="Home">
          <Link to="/" className={classes.link}>
            <Tab icon={<HomeIcon />} label="Home" />
          </Link>
        </Tooltip>

        <Tooltip title="Projects">
          <Link to="/projects" className={classes.link}>
            <Tab icon={<AppsIcon />} label="Projects" />
          </Link>
        </Tooltip>

        <Tooltip title="About">
          <Link to="/about" className={classes.link}>
            <Tab icon={<FaceIcon />} label="About Me" />
          </Link>
        </Tooltip>

        <Tooltip title="Send me an email">
          <Tab
            icon={<MailOutlineIcon />}
            onClick={() => {
              window.open("mailto:anwar.osamah@gmail.com");
            }}
            label="Contact Me"
          />
        </Tooltip>

        <Tooltip title="Visit my LinkedIn">
          <Tab
            icon={<LinkedInIcon />}
            onClick={() => {
              window.open("https://www.linkedin.com/in/osamah-anwar/");
            }}
            label="LinkedIn"
          />
        </Tooltip>

        <Tooltip title="Visit my Github">
          <Tab
            icon={<GitHubIcon />}
            onClick={() => {
              window.open("https://github.com/moakya");
            }}
            label="Github"
          />
        </Tooltip>
      </Tabs>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
