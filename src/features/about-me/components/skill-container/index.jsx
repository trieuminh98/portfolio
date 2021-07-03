import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bgBlackWhite: {
    backgroundColor: '#302f4e',
    borderRadius: '20px',
    fontSize: '1.1rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
  },
  achievement: {
    padding: '28px',
    '& img': {
      width: '25%',
    },
    '& h3': {
      display: 'inline-block',
      paddingLeft: '10px',
      position: 'relative',
      bottom: '20px',
    },
  },
  space: {
      width: '50px',
      height: '2px',
      background: '#fff',
      margin: "0px auto 20px"
  },
}));

function SkillContainer() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMd = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));

  const experienceObj = [
    { name: 'Angular', value: '1+ Years', src: '/react-2.png', alt: 'angular logo' },
    { name: 'ReactJs', value: '6+ Months', src: '/angular.png', alt: 'react logo' },
    { name: 'Html/Css', value: '2 Years', src: '/css3.png', alt: 'css logo' },
    { name: 'TypeScript', value: '2 Years', src: '/typescript.png', alt: 'typescript logo' },
  ];

  const listExperience = experienceObj.map(({ name, value, src, alt }, index) => {
    return (
      <Grid key={`skill-${index}`} item xs={matchesMd ? 3 : (matchesSm ? 6 : 12)}>
        <Card className={classes.bgBlackWhite}>
          <CardContent className={classes.achievement}>
            <div>
              <img src={src} alt={alt} />
              <h3>{name}</h3>
            </div>
            <div className={classes.space}></div>
            <div className={classes.text}>{value} of experience</div>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid container spacing={3}>
      {listExperience}
    </Grid>
  );
}

export default SkillContainer;
