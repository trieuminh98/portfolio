import logo from "./logo.svg";
import "./App.css";
import { createStyles, Grid, makeStyles } from "@material-ui/core";
import LeftPanel from "components/left-panel/index";
import Introduction from "features/introduction/pages";

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
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <LeftPanel />
        </Grid>
        <Grid item xs={11}>
          <div className="App">
              <Introduction />
          </div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
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
          </div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
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
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
