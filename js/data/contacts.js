export default () => {
  function employee(name) {
    const spacer = name.indexOf(' ');
    const first = name.substring(0, spacer);
    const last = name.substring(spacer + 1);
    const email = (first[0] + last).toLowerCase() + '@strenuus.com';
    return { first, last, email, company: 'Strenuus' }
  }

  return [
    employee('Eric Alders'),
    employee('Eric Biven'),
    employee('Eric Budd'),
    employee('Ionut Ciordas'),
    employee('Marshal Simmons'),
    employee('Russell Ball'),
    employee('Jeremy Liberman'),
    employee('Jacob Shafton')
  ];
}
