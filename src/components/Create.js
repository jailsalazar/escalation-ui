import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

class Create extends Component {
  constructor (props) {
    super (props);

    this.state = {
      newEmail: '',
      newPassword: ''
    };
  }

  handleSubmit () {
    // setSent (true);
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
                Create Account
              </Typography>

              <form className={classes.form}>
                <div className={classes.field}>
                  <TextField fullWidth label="Email" 
                    id="newEmail"
                    color="secondary" 
                    variant="filled"
                    onChange={event => this.handleChange(event)} 
                  />
                </div>

                <div className={classes.field}>
                  <TextField fullWidth label="Password" 
                    id="newPassword"
                    color="secondary"
                    variant="filled" 
                    onChange={event => this.handleChange(event)} 
                  />
                </div>

                <div className={classes.field}>
                  <Button
                    size="large"
                    variant="contained"
                    disabled
                  >
                    Create
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

export default withStyles (useStyles) (Create);
