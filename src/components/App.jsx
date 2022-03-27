/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TopNav from './TopNav';

import './App.scss';

class App extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <>
        <Grid
          alignItems="center"
          className="base-layout"
          container
          direction="row"
          elevation={0}
          justify="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <TopNav />
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </>
    );
  }
}
App.propTypes = {
  children: PropTypes.node.isRequired,
};

const TestExports = { App };

export { TestExports };

export default App;
