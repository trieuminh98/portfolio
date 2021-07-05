import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CustomButton from 'components/button';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  quotes: {
    padding: '10px',
    fontSize: '1.2rem',
  },
  introductionImage: {
    width: '250px',
    margin: '10px',
  },
  gridItem: {
    padding: '3px',
  },
  bgBlackWhite: {
    background: theme.color.violetBlueCrayola,
    borderRadius: '20px',
    color: theme.color.stPatricksBlue,
    fontSize: '1.2rem',
  },
}));

function QuotesContainer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const PDF_URL = '/cv.pdf'

  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const contactObj = [
    { name: 'Phone', value: '+ 83909684072' },
    { name: 'Email', value: 'ttrieuminh1998@gmail.com' },
    { name: 'Address', value: 'Hồ Chí Minh City' },
    { name: 'Freelancer', value: 'Unavailable' },
  ];
  const listContact = contactObj.map(({ name, value }, index) => {
    return (
      <Typography style={{ margin: '10px 0 20px 0' }} key={index} variant='body1' component='p'>
        <span style={{ fontWeight: 'bold' }}>{name}</span>: {value}
      </Typography>
    );
  });

  const handleOnClick = () => {
    window.open(PDF_URL);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={matches ? 3 : 12}>
        <img className={classes.introductionImage} src='/avatar_4.png' alt='avatar' />
      </Grid>
      <Grid item xs={matches ? 9 : 12}>
        <Card className={classes.bgBlackWhite}>
          <CardContent className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={matches ? 8 : 12}>
                <div>
                  <Typography className={classes.quotes} variant='subtitle2' component='p'>
                    A skilled and motivated Front-end Developer who are specializing in developing professional web applications. Moderate knowledge
                    and experience with ReactJs and Angular
                  </Typography>
                  <CardActions>
                    <CustomButton content={'Download CV'} handleOnClick={handleOnClick} />
                  </CardActions>
                </div>
              </Grid>
              <Grid item xs={matches ? 4 : 12}>
                {listContact}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default QuotesContainer;
