import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Title from 'components/title';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '125px',
    marginBottom: '80px',
    fontSize: '1.1rem',
  },
  spacer: {
    height: '70px',
  },
}));

function GetInTouch(_props) {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth='lg' className={classes.root}>
        <Title title={'Get In Touch'} />
      </Container>
    </div>
  );
}

export default GetInTouch;
