import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  form: {
    marginTop: theme.spacing (6),
  },
  button: {
    marginTop: theme.spacing (3),
    marginBottom: theme.spacing (2),
  },
  feedback: {
    marginTop: theme.spacing (2),
  },
  paper: {
    backgroundColor: 'rgba(229, 113, 113, 0.27)',
    padding: theme.spacing (4, 3),
    [theme.breakpoints.up ('md')]: {
      padding: theme.spacing (8, 6),
    },
    marginTop: '20%',
  },
  title: {
    fontSize: 21,
    color: '#494949',
    fontWeight: 700,
  },
  field: {
    padding: theme.spacing (2),
  },
});

class Home extends Component {
  constructor (props) {
    super (props);

    this.state = {};
  }

  checkPath() {
    let {classes, location, auth} = this.props;

    let site = location.pathname.split ('/')[1];

    if(site === 'vulnerable') {
      return(
        <Typography variant="h3" align="center" className={classes.title}>
          Successful Login
        </Typography>
        );
    } else {
      if(auth) {
        return(
          <Typography variant="h3" align="center" className={classes.title}>
            Successful Login
          </Typography>
          );
      } else {
        return(
          <Typography variant="h3" align="center" className={classes.title}>
            You are not logged in. Please log in again.
          </Typography>
          );
      }
    }
  }

  render () {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Box mt={7} mb={12}>
            <Paper className={classes.paper} elevation={0} square>
              {
                this.checkPath()
              }
            </Paper>
          </Box>
        </Container>
      </div>
    );
  }
}

export default withRouter (withStyles (useStyles) (Home));
