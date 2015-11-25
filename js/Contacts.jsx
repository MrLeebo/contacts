import _ from 'lodash';
import React from 'react';
import { Row, Col, Panel, Table } from 'react-bootstrap';
import classNames from 'classnames';
import ContactForm from './ContactForm';
import ContactProfile from './ContactProfile';
import SortControl from './SortControl';

import loadContacts from './data/contacts';
import validateContact from './validators/contact';

export default React.createClass({
  getInitialState() {
    return {
      contacts: loadContacts(),
      sortBy: 'email'
    }
  },

  onEmailClick(e) {
    e.preventDefault();
    this.setState({sortBy: 'email'});
  },

  onLastClick(e) {
    e.preventDefault();
    this.setState({sortBy: 'last'});
  },

  onSortChange(sortBy) {
    this.setState({ sortBy });
  },

  addContact(contact, clearForm) {
    const error = validateContact(contact)
    if (error) {
      return this.setState({ error });
    }

    clearForm();
    this.setState({
      error: null,
      contacts: this.state.contacts.concat(contact)
    });
  },

  renderGroups() {
    const { contacts, sortBy } = this.state;
    if (!contacts.length) return;

    const sortedContacts = _.sortBy(contacts, sortBy);
    let letter;

    return _.map(sortedContacts, contact => {
      const alreadySelected = this.state.selected === contact;
      const onClick = () => this.setState({ selected: !alreadySelected && contact });
      const rowClass = classNames({
        info: alreadySelected
      });

      return [
        contact[sortBy][0] != letter && (
        <tr>
          <th style={{width: 30}}>
            {(letter = contact[sortBy][0]).toUpperCase()}
          </th>
          <th/>
          <th/>
        </tr>),
        <tr className={rowClass} onClick={onClick}>
          <td/>
          <td>{contact[sortBy]}</td>
          <td>{contact.first}</td>
        </tr>
      ]
    });
  },

  render() {
    const { sortBy, error } = this.state;
    return (
      <div>
        <h1>Contacts</h1>
        <Panel>
          <Row>
            <Col xs={4}>
              <SortControl sortBy={sortBy} onChange={this.onSortChange}/>

              <Panel>
                <ContactForm ref="form" onSubmit={this.addContact}/>
                <div>
                {error && <span className="text-danger">{'* ' + error}</span>}
                </div>
              </Panel>
            </Col>
            <Col xs={this.state.selected ? 4 : 8}>
              <Table striped hover condensed>
                <tbody>
                  {this.renderGroups()}
                </tbody>
              </Table>
            </Col>
            {this.state.selected && (
              <Col xs={4}>
                <ContactProfile contact={this.state.selected}/>
              </Col>
            )}
          </Row>
        </Panel>
      </div>
    );
  }
})
