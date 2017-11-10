import React, { Component } from 'react'
import { func } from 'prop-types'
import { findDOMNode } from 'react-dom'
import { Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

export default class ContactForm extends Component {
  static propTypes = { onSubmit: func }

  state = { error: null }

  handleSubmit = async e => {
    e.preventDefault()

    const first = findDOMNode(this.first)
    const last = findDOMNode(this.last)
    const email = findDOMNode(this.email)
    const company = findDOMNode(this.company)

    const contact = {
      first: first.value,
      last: last.value,
      email: email.value,
      company: company.value
    }

    try {
      this.setState({ error: null })
      await this.props.onSubmit(contact)
      first.value = last.value = email.value = company.value = ''
    } catch (error) {
      this.setState({ error })
    }
  }

  refFirst = ref => this.first = ref
  refLast = ref => this.last = ref
  refEmail = ref => this.email = ref
  refCompany = ref => this.company = ref

  renderField = (name, type) => {
    const { error } = this.state
    const capitalize = name[0].toUpperCase() + name.slice(1)

    return (
      <FormGroup validationState={error && error[name] && 'error'}>
        <ControlLabel>{capitalize}</ControlLabel>
        <FormControl ref={this[`ref${capitalize}`]} type={type} />
      </FormGroup>
    )
  }

  render() {
    return (
      <Panel>
        <form onSubmit={this.handleSubmit}>
          {this.renderField('first', 'text')}
          {this.renderField('last', 'text')}
          {this.renderField('email', 'email')}
          {this.renderField('company', 'text')}

          <Button bsStyle="primary" type="submit">
            <i className="fa fa-plus" /> Add
          </Button>
        </form>
      </Panel>
    )
  }
}
