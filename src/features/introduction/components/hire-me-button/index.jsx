import React from "react";
import { useScrollSection } from "react-scroll-section";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  borderRadius: {
    borderRadius: "20px",
  },
}));

function HireMeButton(props) {
  const classes = useStyles();
  const contactMeSection = useScrollSection("contactMeSection");

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.borderRadius}
      onClick={() => {
        contactMeSection.onClick();
      }}
    >
      Hire me
    </Button>
  );
}

export default HireMeButton;
