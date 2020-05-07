import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
    fontSize: 35,
    color: '#494949',
    fontWeight: 700,
  },
  directions: {
    fontSize: 20,
    color: '#494949',
    fontWeight: 500,
    marginTop: '20px'
  },
  field: {
    padding: theme.spacing (2),
  },
  buttonSection: {
    marginTop: '25px',
    justifyContent: 'center',
    display: 'flex'
  },
  buttons: {
    padding: '10px',
    width: '130px',
    margin: '0px 20px 0px'
  }
});

class SiteSelection extends Component {
  constructor (props) {
    super (props);

    this.handleSecure = this.handleSecure.bind(this);
    this.handleVulnerable = this.handleVulnerable.bind(this);

    this.state = {};
  }

  handleSecure() {
    this.props.history.push("/secure");
  }

  handleVulnerable() {
    this.props.history.push("/vulnerable");
  }

  render () {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Box mt={7} mb={12}>
            <Paper className={classes.paper} elevation={0} square>
              <Typography variant="h2" align="center" className={classes.title}>
                Welcome
              </Typography>

              <Typography variant="h3" align="center" className={classes.directions}>
                Click "Vulnerable" to be routed to a vulnerable website or "Secure" to access a website with privilage escalation mitigation. 
              </Typography>

              <div className={classes.buttonSection}>
                <Button variant="contained" className={classes.buttons} onClick={this.handleVulnerable}>
                    Vulnerable
                </Button>

                <Button variant="contained" className={classes.buttons} onClick={this.handleSecure}>
                    Secure
                </Button>
              </div>
            </Paper>
          </Box>
        </Container>
      </div>
    );
  }
}

export default withRouter (withStyles (useStyles) (SiteSelection));
