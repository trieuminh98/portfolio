import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

CustomButton.propTypes = {
    content: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func.isRequired
};

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '20px',
    padding: "10px 20px"
  },
}));

function CustomButton(props) {
  const classes = useStyles();
  const {content,  handleOnClick } = props;
  return (
    <Button variant='contained' color='secondary' className={classes.root} onClick={handleOnClick}>
      {content}
    </Button>
  );
}

export default CustomButton;
