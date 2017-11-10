import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default function SortControl (props) {
  const { sortBy, onChange, ...rest } = props

  const handleEmail = e => {
    e.preventDefault()
    onChange('email')
  }

  const handleLast = e => {
    e.preventDefault()
    onChange('last')
  }

  return (
    <ListGroup {...rest}>
      <ListGroupItem href="#" active={sortBy === 'email'} onClick={handleEmail}>Email</ListGroupItem>
      <ListGroupItem href="#" active={sortBy === 'last'} onClick={handleLast}>Last Name</ListGroupItem>
    </ListGroup>
  )
}
