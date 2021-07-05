import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Title from 'components/title';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SendMailFrom from 'features/get-in-touch/components/send-mail-form';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(() => ({
  root: {
    marginTop: '125px',
    marginBottom: '80px',
    fontSize: '1.1rem',
  },
  space: {
    height: '20px',
  },
}));

function GetInTouch(_props) {
  const classes = useStyles();

  const handleSendMailForm = (values) => {
      console.log('Submit:', values);
  }
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));


  return (
    <div>
      <Container maxWidth='lg' className={classes.root}>
      <Title title={'Get In Touch'} />
        <Grid container spacing={3}>
          <Grid item xs={matches ? 4 : 12}>
            <Typography variant='h5' component='h2'>
              Let's talk about everything!
            </Typography>
            <div className={classes.space}></div>
            <Typography variant='subtitle2' component='p'>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Send me an email.
            </Typography>
          </Grid>
          <Grid item xs={matches ? 8 : 12}>
            <SendMailFrom onSubmit={handleSendMailForm}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default GetInTouch;
