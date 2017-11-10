import _ from 'lodash'
import React, { Component } from 'react'
import { Grid, PageHeader, Row, Col, Panel, Table } from 'react-bootstrap'

import ContactForm from './ContactForm'
import ContactProfile from './ContactProfile'
import ContactRow from './ContactRow'
import SortControl from './SortControl'
import data from './data'
import validateContact from './validateContact'

export default class Contacts extends Component {
  state = {
    contacts: data,
    sortBy: 'email'
  }

  onSortChange = sortBy => this.setState({ sortBy })

  addContact = (contact) => {
    return new Promise((resolve, reject) => {
      const error = validateContact(contact)
      if (!_.isEmpty(error)) {
        return reject(error)
      }

      this.setState({
        error: null,
        contacts: this.state.contacts.concat(contact)
      })

      resolve(contact)
    })
  }

  renderGroups = () => {
    const { contacts, sortBy, selected } = this.state
    if (!contacts.length) return

    let letter
    const renderContact = contact => {
      const label = contact[sortBy]
      const alreadySelected = selected === contact
      const onClick = () => this.setState({ selected: !alreadySelected && contact })

      const Header = () => label[0] !== letter && (
        <tr>
          <th style={{ width: 30 }}>
            {(letter = label[0]).toUpperCase()}
          </th>
          <th />
          <th />
        </tr>
      )

      const props = { key: label, contact, label, selected: alreadySelected, onClick }

      return [
        <Header key={label[0]} />,
        <ContactRow {...props} />
      ]
    }

    return _(contacts)
      .sortBy(sortBy)
      .map(renderContact)
      .value()
  }

  render() {
    const { sortBy, error } = this.state

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageHeader>Contacts <small>Sample React App</small></PageHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <SortControl sortBy={sortBy} onChange={this.onSortChange} />

            <Panel>
              <ContactForm ref="form" onSubmit={this.addContact}/>
              <div>
              {error && <span className="text-danger">{'* ' + error}</span>}
              </div>
            </Panel>
          </Col>
          <Col xs={this.state.selected ? 6 : 9}>
            <Table striped hover condensed>
              <tbody>
                {this.renderGroups()}
              </tbody>
            </Table>
          </Col>
          {this.state.selected && (
            <Col xs={3}>
              <ContactProfile contact={this.state.selected}/>
            </Col>
          )}
        </Row>
      </Grid>
    )
  }
}
