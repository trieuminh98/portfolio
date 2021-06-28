import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

import React from "react";

LeftPanel.propTypes = {};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tabs: {
    '& *': {
      [theme.breakpoints.up('sm')]: {
        minWidth: "0px"
      },
      "&.Mui-selected": {
        color: "#f50057",
      }
    }
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    position: "fixed",
    width: "20%"
  },
  tabsContainer: {
    display: "flex"
  },
  paperWrapper: {
    textAlign: "center",
    '& div': {
      margin: " 9px -41px",
      width: "152px",
      background: "#cccccc"
    }
  },
  paper: {
    padding: "8px"
  }
}));

function LeftPanel(_props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const onToggleOpen = () => {
    console.log('hello')
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5">
        Minh
      </Typography>
      <div className={classes.tabsContainer}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          className={classes.tabs}
        >
          <Tab onMouseOver={onToggleOpen} onMouseOut={onToggleOpen} icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab icon={<AccountCircleIcon />} {...a11yProps(1)} />
          <Tab icon={<WorkOutlineIcon />} {...a11yProps(2)} />
          <Tab icon={<ContactMailIcon />} {...a11yProps(3)} />
        </Tabs>
        <div className={classes.paperWrapper}>
          <Collapse in={false}>
            <Paper elevation={3} className={classes.paper}>
              Home
            </Paper></Collapse>

          <Paper elevation={3} className={classes.paper}>
            About Me
          </Paper>
          <Paper elevation={3} className={classes.paper}>
            Experience
          </Paper>
          <Paper elevation={3} className={classes.paper}>
            Contact Me
          </Paper>
        </div>
      </div>
      <Typography variant="h5">
        Minh
      </Typography>
    </div >
  );
}

export default LeftPanel;
