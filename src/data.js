function employee(first, last) {
  return { first, last, email: `${first[0].toLowerCase()}${last.toLowerCase()}@strenuus.com`, company: 'Strenuus' }
}

export default [
  employee('Eric', 'Alders'),
  employee('Ryan', 'Johnson'),
  employee('Chad', 'Dumler'),
  employee('Ionut', 'Ciordas'),
  employee('Marshal', 'Simmons'),
  employee('Russell', 'Ball'),
  employee('Jeremy', 'Liberman'),
  employee('Jacob', 'Shafton')
]
