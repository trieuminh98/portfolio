import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useScrollSection } from "react-scroll-section";


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
    position: "absolute",
    bottom: "40px",
    zIndex: "1",
    textAlign: "center",
    marginLeft: "11px",
    color: '#ffffff',
    border: "none",
    background: "inherit",
    cursor:"pointer"
  },
  wheel: {
    border: "2px solid #ffffff",
    position: "absolute",
    display: "block",
    borderRadius: "16px",
    top: "10px",
    left: "37%",
  },
});

function Mouse() {
  let [top, setTop] = useState(10);
  let [isIncrease, setIsIncrease] = useState(true);
  const aboutMeSection = useScrollSection("aboutMeSection");

  useEffect(() => {
    const changePosition = setInterval(() => {
      if (top === 15) {
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
    <button onClick={aboutMeSection.onClick} className={classes.mouseWrapper}>
      <span>Scroll Down</span>
      <span className={classes.mouse}>
        <span className={classes.wheel} style={{ top: `${top}px` }}></span>
      </span>
    </button>
  );
}

export default Mouse;
