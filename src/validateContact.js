export default contact => {
  const { first, last, email, company } = contact
  const errors = {}

  if (!first || !first.trim()) errors.first = 'Required'
  if (!last || !last.trim()) errors.last = 'Required'
  if (!email || !email.trim()) errors.email = 'Required'
  if (!company || !company.trim()) errors.company = 'Required'

  return errors
}
