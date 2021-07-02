import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

ContentContainer.propTypes = {
  comment: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};

const useStyles = makeStyles((theme) => ({
  bgBlackWhite: {
    backgroundColor: '#302f4e',
    borderRadius: '20px',
    color: '#ffffff',
    fontSize: '1.4rem',
  },
  large: {
    width: '70%',
    height: '70%',
  },
  avatar: {
    position: 'relative',
    top: '40px',
    left: '100px',
  },
  comments: {
    margin: 'auto',
  },
  title: {
    position: 'relative',
    float: 'right',
    top: '50px',
  },
  container: {
    height: '300px',
  },
}));

function ContentContainer(props) {
  const classes = useStyles();
  const { img, comment, title } = props;
  
  return (
    <div>
      <Card className={classes.bgBlackWhite}>
        <CardContent>
          <Grid container spacing={3} className={classes.container}>
            <Grid className={classes.avatar} item xs={3}>
              <Avatar alt={img.alt} src={img.src} className={classes.large} />
            </Grid>
            <Grid className={classes.comments} item xs={8}>
              <Typography variant='h4' component='p'>
                {comment}
              </Typography>
              <Typography className={classes.title} variant='h7' component='p'>
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
