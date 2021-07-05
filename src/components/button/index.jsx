import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

CustomButton.propTypes = {
  content: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.color.mint,
    transition: 'all .3s',
    borderRadius: '20px',
    padding: '10px 20px',
    color: theme.color.stPatricksBlue,
    '&:hover': {
      '& .MuiButton-label': {
        transform: 'translateX(-10px)',
      },
      '& .MuiSvgIcon-root': {
        opacity: 1,
        right: "-23px"
      },
      background: theme.color.mint,
    },
    '& .MuiButton-label': {
      transition: 'all .3s',
    },
    '& .MuiSvgIcon-root': {
      opacity: 0,
      position: 'absolute',
      top: '36%',
      right: '-11px',
      marginTop: '-9px',
      transition: 'all .3s',
    },
  },
}));

function CustomButton(props) {
  const classes = useStyles();
  const { content, type = '', handleOnClick, iconSVG} = props;
  const width = `${content.length * 25}px`;
  return (
    <Button style={{ width: width }} type={type} variant='contained' color='secondary' className={classes.root} onClick={handleOnClick}>
      {content}
      {iconSVG}
    </Button>
  );
}

export default CustomButton;
