import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import FeedbackIcon from "@material-ui/icons/Feedback";
import HomeIcon from "@material-ui/icons/Home";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import MouseOverPopover from "components/mouse-over-popover";
import React, { useState } from "react";
import { useScrollSection } from "react-scroll-section";

LeftPanel.propTypes = {};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tabs: {
    "& *": {
      [theme.breakpoints.up("sm")]: {
        minWidth: "0px",
      },
      "&.Mui-selected": {
        color: "#f50057",
      },
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    position: "fixed",
  },
  tabsContainer: {
    display: "flex",
  },
  paperWrapper: {
    textAlign: "center",
    "& div": {
      margin: " 9px -41px",
      width: "152px",
      background: "#cccccc",
    },
  },
  paper: {
    padding: "8px",
  },
  popOver: {
    marginLeft: "50px",
  },
}));

function LeftPanel(_props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [content, setContent] = useState(null);
  const honeSection = useScrollSection("homePage");
  const aboutMeSection = useScrollSection("aboutMePage");
  const experienceSection = useScrollSection("experiencePage");
  const commentsSection = useScrollSection("commentsPage");
  const contactMeSection = useScrollSection("contactMePage");

  const handleChange = (_event, newValue) => {
    switch (newValue) {
      case 0:
        honeSection.onClick();
        break;
      case 1:
        aboutMeSection.onClick();
        break;
      case 2:
        experienceSection.onClick();
        break;
      case 3:
        commentsSection.onClick();
        break;
      case 4:
        contactMeSection.onClick();
        break;
      default:
        return;
    }
    setValue(newValue);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setContent(event.currentTarget.name);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <Typography variant="h5">Minh</Typography>
      <div className={classes.tabsContainer}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          className={classes.tabs}
        >
          <Tab
            name={"home"}
            icon={<HomeIcon />}
            {...a11yProps(0)}
            aria-haspopup="true"
            aria-owns={open ? "mouse-over-popover" : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <Tab
            name={"aboutMe"}
            icon={<AccountCircleIcon />}
            {...a11yProps(1)}
            aria-haspopup="true"
            aria-owns={open ? "mouse-over-popover" : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            section="about"
          />
          <Tab
            name={"experience"}
            icon={<WorkOutlineIcon />}
            {...a11yProps(2)}
            aria-haspopup="true"
            aria-owns={open ? "mouse-over-popover" : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <Tab
            name={"comments"}
            icon={<FeedbackIcon />}
            {...a11yProps(4)}
            aria-haspopup="true"
            aria-owns={open ? "mouse-over-popover" : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <Tab
            name={"contactMe"}
            icon={<ContactMailIcon />}
            {...a11yProps(3)}
            aria-haspopup="true"
            aria-owns={open ? "mouse-over-popover" : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <MouseOverPopover
            open={open}
            handlePopoverClose={handlePopoverClose}
            anchorEl={anchorEl}
            content={content}
          />
        </Tabs>
      </div>
      <Typography variant="h5">Minh</Typography>
    </div>
  );
}

export default LeftPanel;
