import React, {Component} from 'react';
import {withStyles, getLuminance} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.error.light,
    boxShadow: 'none',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing (2),
  },
  title: {
    fontSize: 21,
    color: '#FFFFFF',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    fontWeight: '700',
  },
  leftLinkActive: {
    color: '#FFFFFF',
  },
  rightLink: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: theme.spacing (3),
    textDecoration: 'none',
  },
  linkSecondary: {
    color: '#494949',
  },
});

class MainToolbar extends Component {
  constructor (props) {
    super (props);

    this.returnLogin = this.returnLogin.bind (this);
    this.returnLinks = this.returnLinks.bind (this);
  }

  returnLinks () {
    let {classes, location} = this.props;

    if(location.pathname === "/home") {
      return (
        <div className={classes.right}>
          <Link
            color="inherit"
            underline="none"
            className={classes.rightLink}
            to={'/home'}
          >
            {'Home'}
          </Link>
          <Link
            underline="none"
            className={[classes.rightLink, classes.linkSecondary].join (' ')}
            to={'/'}
          >
            {'Log Out'}
          </Link>
        </div>
      );
    } else {
      return (
        <div className={classes.right}>
  
          <Link
            color="inherit"
            underline="none"
            className={classes.rightLink}
            to={'/login'}
          >
            {'Log In'}
          </Link>
          <Link
            underline="none"
            className={[classes.rightLink, classes.linkSecondary].join (' ')}
            to={'/create'}
          >
            {'Create Account'}
          </Link>
        </div>
      );
    }
  }

  returnLogin () {
    let {classes} = this.props;

    return (
      <div className={classes.right}>

        <Link
          color="inherit"
          underline="none"
          className={classes.rightLink}
          to={'/login'}
        >
          {'Log In'}
        </Link>
        <Link
          underline="none"
          className={[classes.rightLink, classes.linkSecondary].join (' ')}
          to={'/create'}
        >
          {'Create Account'}
        </Link>
      </div>
    );
  }

  render () {
    let {classes} = this.props;

    return (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} />

            {this.returnLinks()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter (withStyles (useStyles) (MainToolbar));
