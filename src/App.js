import { createStyles, Grid, makeStyles } from "@material-ui/core";
import LeftPanel from "components/left-panel/index";
import Introduction from "features/introduction/pages";
import { Section } from "react-scroll-section";
import "./App.css";
import logo from "./logo.svg";
import {
  ScrollingProvider,
} from 'react-scroll-section';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "#353353",
      color: "#ffffff",
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <ScrollingProvider scrollBehavior="smooth">
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={1}>
            <LeftPanel />
          </Grid>
          <Grid item xs={11}>
            <Section id="homeSection" className="App">
              <Introduction />
            </Section>
            <Section id="aboutMeSection" className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  About Me Section
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </Section>
            <Section id="experienceSection" className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Experience Section
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </Section>
            <Section id="commentsSection" className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Comments Section
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me Section
                </a>
              </header>
            </Section>
            <Section id="contactMeSection" className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Contact Me Section
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </Section>
          </Grid>
        </Grid>
      </div>
    </ScrollingProvider>
  );
}

export default App;
