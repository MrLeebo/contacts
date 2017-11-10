import _ from 'lodash'
import React, { Component } from 'react'
import { Grid, PageHeader, Row, Col, Table, Button } from 'react-bootstrap'
import classNames from 'classnames'

import ContactForm from './ContactForm'
import ContactProfile from './ContactProfile'
import ContactRow from './ContactRow'
import SortControl from './SortControl'
import data from './data'
import validateContact from './validateContact'

export default class Contacts extends Component {
  state = {
    contacts: data,
    selected: null,
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
        selected: contact,
        contacts: this.state.contacts.concat(contact)
      })

      resolve(contact)
    })
  }

  deselectContact = () => this.setState({ selected: null })

  renderGroups = () => {
    const { contacts, sortBy, selected } = this.state
    if (!contacts.length) return

    let letter
    const renderContact = contact => {
      const label = contact[sortBy]
      const alreadySelected = selected === contact
      const onClick = () => {
        this.setState({ selected: !alreadySelected && contact })
        window.scrollTo(0, 0)
      }

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
    const { sortBy, selected } = this.state

    return (
      <Grid>
        <Row>
          <Col md={12} xsHidden smHidden>
            <PageHeader>Contacts <small>Sample React App (<a href="https://github.com/MrLeebo/contacts" target="_blank" rel="noopener noreferrer">source</a>)</small></PageHeader>
          </Col>
        </Row>
        <Row>
          {selected && (
            <Col md={3} mdPush={9}>
              <ContactProfile contact={selected} />

              <Button className="visible-xs visible-sm" type="button" onClick={this.deselectContact}>
                <i className="fa fa-plus" /> Add Contact
              </Button>
            </Col>
          )}
          <Col md={3} mdPull={selected ? 3 : 0}>
            <SortControl sortBy={sortBy} onChange={this.onSortChange} className='hidden-xs hidden-sm' />

            <div className={classNames({ 'hidden-xs': !!selected, 'hidden-sm': !!selected })}>
              <ContactForm onSubmit={this.addContact} />
            </div>
          </Col>
          <Col md={selected ? 6 : 9} mdPull={selected ? 3 : 0}>
            <Table striped hover condensed>
              <tbody>
                {this.renderGroups()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    )
  }
}
