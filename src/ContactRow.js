import React from 'react'
import classNames from 'classnames'

export default function ContactRow (props) {
  const { contact, label, selected, onClick } = props

  return (
    <tr
      className={classNames({ info: selected })}
      onClick={onClick}
    >
      <td />
      <td>{label}</td>
      <td>{contact.first}</td>
    </tr>
  )
}
