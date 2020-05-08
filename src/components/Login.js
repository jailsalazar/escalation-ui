import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

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
  error: {
    color: 'red',
    fontSize: '15px',
    fontWeight: '700',
    textAlign: 'center'
  }
});

const data = require('../data/login.json');

class Login extends Component {
  constructor (props) {
    super (props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      helperText: ""
    };
  }

  handleSubmit() {
    let {email, password} = this.state;

    let {location} = this.props;

    let site = location.pathname.split ('/')[1];

    data.users.map(user => {
      if(user.email === email) {
        if(user.password === password) {
          this.props.history.push("/" + site + "/home");
        }
        else {
          this.setState({helperText: "Incorrect email or password. Try again."});
        }
      } else {
          this.setState({helperText: "Incorrect email or password. Try again."});
      }
    });
  }

  handleChange(event) {
    let {id, value} = event.target;

    this.setState({
      [id]: value
    });
  }

  render () {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Box mt={7} mb={12}>
            <Paper className={classes.paper} elevation={0} square>
              <Typography variant="h3" align="center" className={classes.title}>
                Log In
              </Typography>

              <form className={classes.form}>
                <div className={classes.field}>
                  <TextField fullWidth 
                    label="Email" color="secondary" 
                    variant="filled" 
                    id="email"
                    onChange={event => this.handleChange(event)}
                  />
                </div>

                <div className={classes.field}>
                  <TextField fullWidth 
                    label="Password" color="secondary" 
                    variant="filled" 
                    id="password"
                    type="password"
                    onChange={event => this.handleChange(event)}
                  />
                </div>

                <FormHelperText className={classes.error}>
                  {this.state.helperText}
                </FormHelperText>

                <div className={classes.field}>
                  <Button
                    size="large"
                    variant="contained"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>                   
                </div>
              </form>
            </Paper>
          </Box>
        </Container>
      </div>
    );
  }
}

export default withRouter(withStyles (useStyles) (Login));
