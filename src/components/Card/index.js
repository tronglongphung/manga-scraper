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
  font: {
    fontSize: '2vh',
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={`${classes.root} mx-2`}>
        <CardActionArea>
          {/* Link to location */}
          <Link to={`/manga/${props.url}`}>
            <CardMedia className={classes.media} image={props.cover} title={props.name} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2" className={classes.font}>
                {props.name}
              </Typography>
              <Typography className={classes.font} variant="body2" color="textSecondary" component="p">
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
