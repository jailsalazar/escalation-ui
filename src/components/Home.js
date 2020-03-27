import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.error.light,
    boxShadow: 'none'
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
    fontWeight: '700'
  },
  leftLinkActive: {
    color: '#FFFFFF',
  },
  rightLink: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: theme.spacing (3),
    textDecoration: 'none'
  },
  linkSecondary: {
    color: '#494949',
  },
});

class Home extends Component {
  constructor (props) {
    super (props);

    this.handleChange = this.handleChange.bind (this);
    this.handleMenu = this.handleMenu.bind (this);
    this.handleClose = this.handleClose.bind (this);

    this.state = {
      anchorEl: null,
      auth: true,
    };
  }

  handleChange (event) {
    this.setState ({auth: event.target.checked});
  }

  handleMenu (event) {
    this.setState ({anchorEl: event.currentTarget});
  }

  handleClose () {
    this.setState ({anchorEl: null});
  }

  render () {
    let {anchorEl, auth} = this.state;
    let {classes} = this.props;

    const open = Boolean (anchorEl);

    return (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} />

            <div className={classes.right}>
              <Link
                color="inherit"
                underline="none"
                className={classes.rightLink}
                to={"/login"}
              >
                {'Log In'}
              </Link>
              <Link
                underline="none"
                className={[classes.rightLink, classes.linkSecondary].join(' ')}
                to={"/create"}
              >
                {'Create Account'}
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles (useStyles) (Home);
