import { makeStyles, withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import Typography from '@material-ui/core/Typography';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import React from 'react';
import Title from 'components/title';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '125px',
    marginBottom: '80px',
    fontSize: '1.2rem',
  },
  timeLine: {
    backgroundColor: '#302f4e',
    borderRadius: '20px',
    width: '93%',
    padding: '20px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  space: {
    height: '2px',
    background: '#fff',
    margin: '10px auto 20px',
  },
  companyName: {
    margin: '10px auto 20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  year: {
    float: 'right',
  },
  list: {
    padding: 0
  }
}));

function Experiences() {
  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const CusTimelineItem = withStyles({
    missingOppositeContent: {
      '&:before': {
        display: 'none',
      },
    },
  })(TimelineItem);

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Title title={'Experiences'} />
      <Typography className={classes.companyName} variant='h3' component='h3'>
        <span>DXC Technology</span>
        <span className={classes.year}>(2019 - 2021)</span>
        <div className={classes.space}></div>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={matches ? 6 : 12}>
          <Timeline className={classes.timeLine}>
            <CusTimelineItem>
              <TimelineSeparator>
                <TimelineDot color='secondary'>
                  <WorkOutlineIcon />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='caption' component='h4'>
                  09/2019 - 04/2021
                </Typography>
                <Typography variant='h5' component='h5'>
                  Project: Famous Insurance Company
                </Typography>
                <Typography variant='body1' component='ul'>
                  <ul className={classes.list}>
                    <li>Application Development & Management.</li>
                    <li>Develop software using the Agile Scrum model.</li>
                    <li>Taking the front-end position of project in Angular framework.</li>
                    <li>Using JIRA for task/issue tracking.</li>
                    <li>Using Confluence for team collaboration.</li>
                    <li>Using GitHub and Source tree app to manage/resolve conflict code.</li>
                    <li>Create new features, functionality on the website using Typescript, SASS and JSON.</li>
                    <li>Work with Back-end team on RESTful API designs.</li>
                    <li>Editing and adding HTML, CSS for web page.</li>
                    <li>Create/update/fix error for Unit test.</li>
                    <li>Designing and implementing modules assigned.</li>
                    <li>Fully accountable for the successful completion of any piece of work assigned.</li>
                  </ul>
                </Typography>
              </TimelineContent>
            </CusTimelineItem>
            <CusTimelineItem>
              <TimelineSeparator>
                <TimelineDot color='secondary'>
                  <WorkOutlineIcon />
                </TimelineDot>
              </TimelineSeparator>
            </CusTimelineItem>
          </Timeline>
        </Grid>
        <Grid item xs={matches ? 6 : 12}>
          <Timeline className={classes.timeLine}>
            <CusTimelineItem>
              <TimelineSeparator>
                <TimelineDot color='secondary'>
                  <WorkOutlineIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='caption' component='h4'>
                  05/2019 - 07/2021
                </Typography>
                <Typography variant='h5' component='h3'>
                  Project: Australia's rail services
                </Typography>
                <Typography variant='body1' component='ul'>
                  <ul className={classes.list}>
                    <li>Application Development & Management.</li>
                    <li>Taking the front-end position of project in Sharepoint platform</li>
                    <li>Editing and adding HTML, CSS for web page.</li>
                    <li>Create new features, functionality on the website using AngularJs and Javascript</li>
                    <li>Using WAI-ARIA for building fully accessible JavaScript widgets.</li>
                    <li>Fully accountable for the successful completion of any piece of work assigned.</li>
                  </ul>
                </Typography>
              </TimelineContent>
            </CusTimelineItem>
            <CusTimelineItem>
              <TimelineSeparator>
                <TimelineDot color='secondary'>
                  <WorkOutlineIcon />
                </TimelineDot>
              </TimelineSeparator>
            </CusTimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Experiences;
