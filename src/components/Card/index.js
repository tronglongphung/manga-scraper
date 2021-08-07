import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 170,
  },
  media: {
    height: 150,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          {/* Link to location */}
          <Link to={`/manga/${props.url}`}>
            <CardMedia
              className={classes.media}
              image="https://avt.mkklcdnv6temp.com/12/p/1-1583464155.jpg"
              title="Black Clover"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* Latest chapter */}
                {props.latest}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </>
  );
}
