export default contact => {
  if (!contact.first) return 'First is required'
  if (!contact.last) return 'Last is required'
  if (!contact.email) return 'Email is required'
  if (!contact.company) return 'Company is required'
}
