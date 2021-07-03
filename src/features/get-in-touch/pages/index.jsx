import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Title from 'components/title';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SendMailFrom from 'features/get-in-touch/components/send-mail-form';

const useStyles = makeStyles((theme) => ({
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

  return (
    <div>
      <Container maxWidth='lg' className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography variant='h5' component='h2'>
              Let's talk about everything!
            </Typography>
            <div className={classes.space}></div>
            <Typography variant='subtitle2' component='p'>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Send me an email.
            </Typography>
            <Title title={'Get In Touch'} />
          </Grid>
          <Grid item xs={8}>
            <SendMailFrom onSubmit={handleSendMailForm}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default GetInTouch;
