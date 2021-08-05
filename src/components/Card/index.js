import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 160,
  },
  media: {
    height: 150,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* Link to location */}
        <a href="https://readmanganato.com/manga-eh951664/chapter-264" target="_blank" rel="noopener noreferrer">
          <CardMedia
            className={classes.media}
            image="https://avt.mkklcdnv6temp.com/12/p/1-1583464155.jpg"
            title="Black Clover"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Black Clover
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Latest chapter
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
    </Card>
  );
}
