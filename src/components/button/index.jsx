import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

CustomButton.propTypes = {
    content: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.color.mint,
    borderRadius: '20px',
    padding: "10px 20px",
    color: theme.color.stPatricksBlue,
    '&:hover': {
      background: theme.color.mint,
    }
  },
}));

function CustomButton(props) {
  const classes = useStyles();
  const {content, type = '',  handleOnClick } = props;
  return (
    <Button type={type} variant='contained' color='secondary' className={classes.root} onClick={handleOnClick}>
      {content}
    </Button>
  );
}

export default CustomButton;
