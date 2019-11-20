import React, { useContext, useState } from 'react';
import StoreContext from './store/context';
import * as ACTIONS from './store/actions/login_actions';
import './App.css';
import history from './history';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import login from './data/login.json';

function App() {
  const { dispatch } = useContext(StoreContext);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    //event.persist();
    //Search email/password
    //Here it might be a HTTP GET to a REST API. Without a server we will search inside a JSON file.
    let res=null;
    for (let i=0; i<login.length;i++) {
      if (login[i].email === event.target.email.value && login[i].password === event.target.password.value) {
        res = login[i];
        break;
      }
    }
    if (res!==null){   //email found!
      setIsError(false);
      //console.log(res);
      dispatch(ACTIONS.login_submit({
        email: res.email,
        password: res.password,
        name: res.name,
        isAuthenticated: true
      }));
      //console.log("go to Events page");
      history.push('/events');  //here I am redirecting to the Events page      
    } else {    //email NOT found!
      setIsError(true);    
    }
  }

  //STYLES
  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    box: {
      color: 'red',
      marginBottom: '10px',
    }
  }));

  const classes = useStyles();

  //JSX RETURN
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            LOG IN
          </Button>
          {isError &&
            <Box 
              textAlign="center" 
              fontWeight="fontWeightBold"
              fontSize={18}
              className={classes.box}
            >
              Invalid email or password
            </Box>
          }
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default App;
