import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default function SortControl ({sortBy, onChange}) {
  return (
    <ListGroup>
      <ListGroupItem href="#" active={sortBy === 'email'} onClick={() => onChange('email')}>Email</ListGroupItem>
      <ListGroupItem href="#" active={sortBy === 'last'} onClick={() => onChange('last')}>Last Name</ListGroupItem>
    </ListGroup>
  )
}
