import React from 'react'
import { object } from 'prop-types'
import { Image, Table } from 'react-bootstrap'
import gravatar from 'gravatar'

export default function ContactProfile ({contact}) {
  const { first, last, email, company } = contact
  const src = gravatar.url(email, { s: 200, d: 'mm' }, false)

  return (
    <div>
      <div className="text-center">
        <Image circle src={src} />
      </div>
      <br />

      <Table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{last}, {first}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td><a href={`mailto:${email}`}>{email}</a></td>
          </tr>
          <tr>
            <th>Company</th>
            <td>{company}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

ContactProfile.propTypes = { contact: object.isRequired }
