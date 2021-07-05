import { createStyles, Grid, makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';
import LeftPanel from 'components/left-panel/';
import AboutMe from 'features/about-me/pages';
import Comments from 'features/comments/pages';
import Experiences from 'features/experience/pages';
import GetInTouch from 'features/get-in-touch/pages/index';
import Introduction from 'features/introduction/pages';
import { ScrollingProvider, Section } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';

import './App.css';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#877CDC',
      color: '#ffffff',
    },
    home: {
      textAlign: 'center',
    },
  })
);

const theme = createMuiTheme({
  color: {
    lavenderBlue: '#877CDC',
    violetBlueCrayola: '#a5a5dd',
    stPatricksBlue: '#272B6B',
    mint: '#29D6B9',
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <ScrollingProvider scrollBehavior='smooth'>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={1}>
              <LeftPanel />
            </Grid>
            <Grid item xs={11}>
              <Section id='homeSection' className={classes.home}>
                <Fade bottom>
                  <Introduction />
                </Fade>
              </Section>
              <Section id='aboutMeSection'>
              <Fade bottom>
              <AboutMe />
                </Fade>
              </Section>
              <Section id='experienceSection'>
              <Fade bottom>
              <Experiences />
                </Fade>
              </Section>
              <Section id='commentsSection'>
              <Fade bottom>
              <Comments />
                </Fade>
              </Section>
              <Section id='contactMeSection'>
              <Fade bottom>
              <GetInTouch />
                </Fade>
              </Section>
            </Grid>
          </Grid>
        </div>
      </ScrollingProvider>
    </ThemeProvider>
  );
}

export default App;
