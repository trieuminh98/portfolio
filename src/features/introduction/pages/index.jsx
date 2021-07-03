import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HireMeButton from 'features/introduction/components/hire-me-button';
import Mouse from 'features/introduction/components/mouse';
import TypedCursor from 'features/introduction/components/typed-cursor';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';


import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginBottom: '80px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: '1.1rem',
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
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));

function Introduction(props) {
  const classes = useStyles();
  return (
    <Container maxWidth='lg' className={classes.root}>
      <Avatar alt="Remy Sharp" src="/avatar_4.png" className={classes.large} />
      <Typography variant='h3' component='h1' className={classes.margin}>
        Tin Triều Minh
      </Typography>
      <TypedCursor />
      <div className={classes.margin}>
        <Button target='_blank' href='https://www.facebook.com/trieuminh0806/' color='inherit'>
          <FacebookIcon />
        </Button>
        <Button target='_blank' href='https://www.linkedin.com/in/minh-tin-5a65a7210/' color='inherit'>
          <LinkedInIcon />
        </Button>
        <Button target='_blank' href='https://www.instagram.com/minnt.2asminh/' color='inherit'>
          <InstagramIcon />
        </Button>
      </div>
      <HireMeButton  />
      <Mouse />
    </Container>
  );
}

export default Introduction;
