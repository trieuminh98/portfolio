import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typical from 'react-typical'


TypedCursor.propTypes = {};

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "Waiting for the Sunrise, cursive",
    fontSize: "1.3rem",
    letterSpacing: "6px",
    fontWeight: "bold",
  }
}));



function TypedCursor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
			<Typical
        steps={[`I'm a Front-End Developder`, 2500, `I'm a Cat Lover`, 2000]}
        loop={Infinity}
        wrapper="span"
      />
    </div>
  );
}

export default TypedCursor;
