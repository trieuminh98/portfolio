import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

ContentContainer.propTypes = {
  comment: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};

const useStyles = makeStyles((theme) => ({
  bgBlackWhite: {
    backgroundColor: theme.color.violetBlueCrayola,
    borderRadius: '20px',
    color: theme.color.stPatricksBlue,
    fontSize: '1.4rem',
  },
  large: {
      width: '50%',
      height: '90%',
    [theme.breakpoints.up('sm')]: {
      width: '25%',
      height: '90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '95%',
      height: '67%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      height: '70%',
    },
  },
  avatar: {
    position: 'relative',
    top: '15px',
    left: '73px',
    [theme.breakpoints.up('sm')]: {
      left: '38%',
    },
    [theme.breakpoints.up('md')]: {
      left: '5%',
      top: '40px',
    },
  },
  comments: {
    margin: 'auto',
  },
  title: {
    position: 'relative',
    float: 'right',
    top: "10px"
  },
  container: {
    height: '300px',
  },
}));

function ContentContainer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));

  const { img, comment, title } = props;

  return (
    <div>
      <Card className={classes.bgBlackWhite}>
        <CardContent>
          <Grid container spacing={1} className={classes.container}>
            <Grid className={classes.avatar} item xs={matchesMd ? 3 : 12}>
              <Avatar alt={img.alt} src={img.src} className={classes.large} />
            </Grid>
            <Grid className={classes.comments} item xs={matchesMd ? 8 : 12}>
              <Typography variant={matchesMd ? 'h4' : (matchesSm ? 'h6' : 'body2')} component='h4'>
                {comment}
              </Typography>
              <Typography className={classes.title} variant={matchesSm ? 'h6' : 'body2'} component='h6'>
                {title}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContentContainer;
