import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FeedbackIcon from '@material-ui/icons/Feedback';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import MouseOverPopover from 'components/mouse-over-popover';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useScrollSection } from 'react-scroll-section';

const drawerWidth = 53;

const useStyles = makeStyles((theme) => ({
  tabs: {
    '& *': {
      minWidth: '0px',
      '&.Mui-selected': {
        color: theme.color.mint,
      },
    },
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: theme.color.lavenderBlue,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      display: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    justifyContent: "space-around",
    background: theme.color.lavenderBlue,
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tabsContainer: {
    display: 'flex',
  },
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function LeftPanel(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const honeSection = useScrollSection('homeSection');
  const aboutMeSection = useScrollSection('aboutMeSection');
  const experienceSection = useScrollSection('experienceSection');
  const commentsSection = useScrollSection('commentsSection');
  const contactMeSection = useScrollSection('contactMeSection');
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [content, setContent] = useState(null);
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setContent(event.currentTarget.name);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

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

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className={classes.tabsContainer}>
        <Tabs
          orientation='vertical'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs'
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
          className={classes.tabs}
        >
          <Tab
            name={'home'}
            icon={<HomeIcon />}
            {...a11yProps(0)}
            aria-haspopup='true'
            aria-owns={open ? 'mouse-over-popover' : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <Tab
            name={'aboutMe'}
            icon={<AccountCircleIcon />}
            {...a11yProps(1)}
            aria-haspopup='true'
            aria-owns={open ? 'mouse-over-popover' : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            section='about'
          />
          <Tab
            name={'experience'}
            icon={<WorkOutlineIcon />}
            {...a11yProps(2)}
            aria-haspopup='true'
            aria-owns={open ? 'mouse-over-popover' : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <Tab
            name={'comments'}
            icon={<FeedbackIcon />}
            {...a11yProps(4)}
            aria-haspopup='true'
            aria-owns={open ? 'mouse-over-popover' : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <Tab
            name={'contactMe'}
            icon={<ContactMailIcon />}
            {...a11yProps(3)}
            aria-haspopup='true'
            aria-owns={open ? 'mouse-over-popover' : undefined}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <MouseOverPopover open={open} handlePopoverClose={handlePopoverClose} anchorEl={anchorEl} content={content} />
        </Tabs>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Minh
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

LeftPanel.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default LeftPanel;
