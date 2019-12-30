const people = [
  'Easter Bunny', // no
  'Tooth Fairy', // ok
  'Frosty the Snowman',
  'Jack Frost', // no 
  'Cupid',// ok 
  'Father Time', // ok
];
const responses = [
  {name: 'Easter Bunny', response: 'declined'},
  {name: 'Jack Frost', response: 'declined'},
  {name: 'Tooth Fairy', response: 'accepted'},
];

const getAttendees = (peopleInvited, responses) => {
  const declinedNamesArr = responses.filter(e => e.response === 'declined').map( e => e.name);
  return peopleInvited.filter( e => !declinedNamesArr.includes(e))
};

console.log(
  getAttendees(people, responses)
  )