import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import PropTypes from "prop-types";

MouseOverPopover.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.instanceOf(Element),
  handlePopoverClose: PropTypes.func,
  content: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
    margin: "5px 0 0 30px"
  },
  paper: {
    background: theme.color.mint,
    color: theme.color.stPatricksBlue,
    padding: theme.spacing(1.5),
    borderRadius: "20px"
  },
}));

export default function MouseOverPopover(props) {
  const classes = useStyles();
  const { open, anchorEl, handlePopoverClose, content } = props;
  const popoverContentMapping = new Map([
    ["home", "Home"],
    ["aboutMe", "About Me"],
    ["experience", "Experience"],
    ["comments", "Comments"],
    ["contactMe", "Contact Me"],
  ]);

  return (
    <div>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{popoverContentMapping.get(content)}</Typography>
      </Popover>
    </div>
  );
}
