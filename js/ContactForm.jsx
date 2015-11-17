import React from 'react';
import { Input, Button } from 'react-bootstrap';

export default React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func
  },

  onSubmit(e) {
    e.preventDefault();

    const { first, last, email, company } = this.refs;
    this.props.onSubmit({
      first: first.getValue(),
      last: last.getValue(),
      email: email.getValue(),
      company: company.getValue()
    });

    first.getInputDOMNode().value = last.getInputDOMNode().value = email.getInputDOMNode().value = company.getInputDOMNode().value = ''
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Input ref="first" type="text" label="First"/>
        <Input ref="last" type="text" label="Last"/>
        <Input ref="email" type="email" label="Email"/>
        <Input ref="company" type="text" label="Company"/>

        <Button bsStyle="primary" type="submit">
          <i className="fa fa-plus"></i> Add
        </Button>
      </form>
    );
  }
});
