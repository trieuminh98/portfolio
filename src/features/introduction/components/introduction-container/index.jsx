import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";

IntroductionContainer.propTypes = {};

const useStyles = makeStyles((theme) => ({
  introductionContainer: {
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
  introductionImage: {
    width: "250px",
    margin: "10px",
  },
  borderRadius: {
    borderRadius: "20px",
  },
  margin: {
    margin: "10px",
  },
}));

const handleClick = (link) => {
  window.open(link);
};

function IntroductionContainer(props) {
  const classes = useStyles();
  return (
    <div className={classes.introductionContainer}>
      <img
        className={classes.introductionImage}
        src="/avatar_4.png"
        alt="avatar"
      />
      <Typography variant="h1" component="h2" className={classes.margin}>
        Tin Triều Minh
      </Typography>
      <Typography variant="h5" component="h5" className={classes.margin}>
        I'm a Front-end Developer
      </Typography>
      <div className={classes.margin}>
        <Button target="_blank" href="https://www.facebook.com/trieuminh0806/" color="inherit">
          <FacebookIcon />
        </Button>
        <Button target="_blank" href="https://www.linkedin.com/in/minh-tin-5a65a7210/" color="inherit">
          <LinkedInIcon />
        </Button>
        <Button target="_blank" href="https://www.instagram.com/minnt.2asminh/" color="inherit">
          <InstagramIcon />
        </Button>
      </div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.borderRadius}
      >
        Hire me
      </Button>
    </div>
  );
}

export default IntroductionContainer;
