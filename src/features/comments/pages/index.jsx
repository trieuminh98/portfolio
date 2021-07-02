import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ContentContainer from 'features/comments/components/comment-container';
import commentsData from 'datas/comments-data.json';
import Title from 'components/title';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '125px',
    marginBottom: '80px',
    fontSize: '1.1rem',
  }
}));

function Comments() {
  const classes = useStyles();
  const isHidden = true;
  const contentContainer = commentsData.map(({ comment, title, img }, index) => {
    return <ContentContainer key={index} comment={comment} title={title} img={img} />;
  });
  

  return (
    isHidden && (
      <Container maxWidth='lg' className={classes.root}>
        <Title title={'The Cute Comments'} />
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>{contentContainer}</Carousel>
      </Container>
    )
  );
}

export default Comments;
