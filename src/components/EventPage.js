import React, { useEffect, useContext } from 'react';
import StoreContext from '../store/context';
import nextEvents from '../data/NextEvents.json'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 450,
    position: 'relative',
    marginTop: '10px',
  },
  media: {
    height: 110,
  },
  overlay: {
    position: 'relative',
    top: '-20px',
    right: '5px',
    float: 'right',
    color: 'black',
  },
  bolder: {
    fontSize: '14px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  light: {
    fontSize: '12px',
    fontFamily: 'sans-serif',
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

const EventPage = () => {
  const { state } = useContext(StoreContext);

  const classes = useStyles();

  //Use current year for subscriber access type(0=free or 1=premium)
  //REST API for this events information
  useEffect(() => {
    console.log("useEffect")
    console.log(nextEvents);
  });

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={require("../images/37478757-eef9-4cf1-b0c2-9ceb426cffaa.jpg")}
                />
                <div className={classes.overlay}>
                  <img src={require("../images/flag-canada.png")} alt=""></img>
                </div>
                <CardContent>
                  <label className={classes.bolder}>
                    VanHackthon
              </label>
                  <Typography className={classes.light}>November 15-22, 2019</Typography>
                  <div>
                    <img src={require("../images/14b97ad63e6d7e5a8807f06f0c0b1aca.png")} alt="" style={{ width: '15px', height: '15px', float: 'left' }}></img>
                    <Typography className={classes.light} style={{ fontSize: '11px' }}>Vancouver - Canada</Typography>
                  </div>
                  <div>
                    <label className={classes.bolder} style={{ fontSize: '12px', float: 'left', marginTop: '2px' }}>
                      Deadline:
                </label>
                    <Typography className={classes.light} style={{ fontSize: '11px', marginTop: '3px' }}>11/03/2019</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={require("../images/37478757-eef9-4cf1-b0c2-9ceb426cffaa.jpg")}
                />
                <div className={classes.overlay}>
                  <img src={require("../images/flag-canada.png")} alt=""></img>
                </div>
                <CardContent>
                  <label className={classes.bolder}>
                    VanHackthon
                </label>
                  <Typography className={classes.light}>November 15-22, 2019</Typography>
                  <div>
                    <img src={require("../images/14b97ad63e6d7e5a8807f06f0c0b1aca.png")} alt="" style={{ width: '15px', height: '15px', float: 'left' }}></img>
                    <Typography className={classes.light} style={{ fontSize: '11px' }}>Vancouver - Canada</Typography>
                  </div>
                  <div>
                    <label className={classes.bolder} style={{ fontSize: '12px', float: 'left', marginTop: '2px' }}>
                      Deadline:
                  </label>
                    <Typography className={classes.light} style={{ fontSize: '11px', marginTop: '3px' }}>11/03/2019</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={require("../images/37478757-eef9-4cf1-b0c2-9ceb426cffaa.jpg")}
                />
                <div className={classes.overlay}>
                  <img src={require("../images/flag-canada.png")} alt=""></img>
                </div>
                <CardContent>
                  <label className={classes.bolder}>
                    VanHackthon
                </label>
                  <Typography className={classes.light}>November 15-22, 2019</Typography>
                  <div>
                    <img src={require("../images/14b97ad63e6d7e5a8807f06f0c0b1aca.png")} alt="" style={{ width: '15px', height: '15px', float: 'left' }}></img>
                    <Typography className={classes.light} style={{ fontSize: '11px' }}>Vancouver - Canada</Typography>
                  </div>
                  <div>
                    <label className={classes.bolder} style={{ fontSize: '12px', float: 'left', marginTop: '2px' }}>
                      Deadline:
                  </label>
                    <Typography className={classes.light} style={{ fontSize: '11px', marginTop: '3px' }}>11/03/2019</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
export default EventPage;