import React from 'react';
import { Image, Table } from 'react-bootstrap';
import gravatar from 'gravatar';

export default React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  gravatarUrl() {
    const { contact } = this.props;
    return gravatar.url(contact.email, {s: 200, d: 'mm'}, false);
  },

  render() {
    const { first, last, email, company } = this.props.contact;
    return (
      <div>
        <div className="text-center">
          <Image circle src={this.gravatarUrl()}/>
        </div>
        <br/>

        <Table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{last}, {first}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td><a href={'mailto:' + email}>{email}</a></td>
            </tr>
            <tr>
              <th>Company</th>
              <td>{company}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
})
