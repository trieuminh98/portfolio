import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

Mouse.propTypes = {};

const useStyles = makeStyles({
    mouse: {
      borderRadius: "16px",
      position: "relative",
      border: "2px solid #ffffff",
      display: "block",
      width: "20px",
      height: "26px",
      margin: "9px auto",
    },
    mouseWrapper: {
      pointer: "cursor",
      textAlign: "center",
      marginLeft: "11px"
    },
    wheel: {
      border: "2px solid #ffffff",
      position: "absolute",
      display: "block",
      borderRadius: "16px",
      top: "10px",
      left: "42%",
    },
  });

function Mouse(props) {
    let [top, setTop] = useState(10);
  let [isIncrease, setIsIncrease] = useState(true);

  useEffect(() => {
    const changePosition = setInterval(() => {
        if(top === 15) {
            setIsIncrease(false);
            setTop(top--);
        } else if (top === 5) {
            setIsIncrease(true);
            setTop(top++);
        } else if (isIncrease) {
            setTop(top++);
        } else {
            setTop(top--);
        }
    }, 100);
    return () => clearInterval(changePosition);
  });
const classes = useStyles();

  return (
    <div className={classes.mouseWrapper}>
      <span>Scroll Down</span>
      <span className={classes.mouse}>
        <span className={classes.wheel} style={{ top: `${top}px` }}></span>
      </span>
    </div>
  );
}

export default Mouse;
