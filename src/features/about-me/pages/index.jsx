import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import SkillContainer from 'features/about-me/components/skill-container';
import QuotesContainer from 'features/about-me/components/quotes-container';
import React from 'react';
import Title from 'components/title';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '125px',
    marginBottom: '80px',
    fontSize: '1.2rem',
  }
}));

function AboutMe() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth='lg'>
      <Title title={'About Me'} />
      <QuotesContainer />
      <div className={classes.spacer}></div>
      <SkillContainer />
    </Container>
  );
}

export default AboutMe;
