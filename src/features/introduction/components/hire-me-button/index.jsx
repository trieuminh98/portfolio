import React from "react";
import { useScrollSection } from "react-scroll-section";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  borderRadius: {
    background: theme.color.mint,
    color: theme.color.stPatricksBlue,
    borderRadius: "20px",
    '&:hover': {
      background: theme.color.mint,
    }
  },
}));

function HireMeButton(props) {
  const classes = useStyles();
  const contactMeSection = useScrollSection("contactMeSection");

  return (
    <Button
      variant="contained"
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
