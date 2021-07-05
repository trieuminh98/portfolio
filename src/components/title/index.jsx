import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


Title.propTypes = {
  title: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.color.stPatricksBlue,
  },
  spacer: {
    height: '70px',
  },
}));

function Title(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <Fragment>
      <Typography className={classes.root} variant='h3' component='h2'>
        {title}
      </Typography>
      <div className={classes.spacer}></div>
    </Fragment>
  );
}

export default Title;
