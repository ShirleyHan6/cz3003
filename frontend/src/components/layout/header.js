import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from './tabContainer';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  toolBar: {
    paddingLeft: '12px'
  },
  glow: {
    // flexGrow: 1,
    textAlign: 'left'
  },
  buttonGroup: {
    marginLeft: '15px'
  },
  loginButton: {
    marginLeft: 'auto'
  },
  tabGroup: {
    textAligh: 'left'
  }
});

class Header extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <Toolbar variant='dense' className={classes.toolBar}>
            <Typography variant='h5' color='inherit' className={classes.glow}>
              Crisis Management System
            </Typography>
            <div className={classes.buttonGroup}>
              <Button color='primary'>Home</Button>
              <Button color='primary'>Report</Button>
            </div>

            <div className={classes.loginButton}>
              <Button color='inherit'>Login</Button>
            </div>
          </Toolbar>
          <Tabs
            className={classes.tabGroup}
            value={value}
            onChange={this.handleChange}
            indicatorColor='primary'
            textColor='primary'>
            <Tab label='All Crisis' />
            <Tab label='Dengue' />
            <Tab label='Haze' />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer type='all' />}
        {value === 1 && <TabContainer type='dengue' />}
        {value === 2 && <TabContainer type='haze' />}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);