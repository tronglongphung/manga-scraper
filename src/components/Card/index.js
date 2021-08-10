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
    minWidth: 170,
    maxWidth: 170,
    minHeight: 260,
    maxHeight: 260,
  },
  media: {
    height: 150,
  },
  font: {
    fontSize: '.9rem',
    lineHeight: '1.5',
  },
  subheading: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    bottom: '0px',
  },
  link: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardcontent: {
    justifyContent: 'space-between',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={`${classes.root} overflow-y-scroll m-2`}>
        <CardActionArea>
          <Link
            to={{ pathname: `/manga/${props.url}`, state: { coverImg: `${props.cover}` } }}
            className={classes.link}
          >
            <CardMedia className={classes.media} image={props.cover} title={props.name} />
            <CardContent className={classes.cardcontent}>
              <Typography gutterBottom variant="h6" component="h2" className={classes.font}>
                {props.name}
              </Typography>
              <Typography className={classes.subheading} variant="body2" color="textSecondary" component="p">
                {props.latest}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </>
  );
}
