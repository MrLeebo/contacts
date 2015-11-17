import React from 'react';
import { Grid } from 'react-bootstrap';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  render() {
    return <Grid>{this.props.children}</Grid>
  }
});
