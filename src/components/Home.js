import React from "react";
import { makeStyles } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles((theme) => ({
    body: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <header className="App-header">
        <p>
          Edit <code>HOME</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default Home;
