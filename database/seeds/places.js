const faker = require("faker")

const createPlace = () => ({
  lat: faker.address.latitude(),
  lng: faker.address.longitude(),
  city: faker.address.city(),
  state: faker.address.stateAbbr(),
  name: faker.company.companyName(),
  image: faker.image.business(),
  type: faker.company.bsAdjective(),
  vicinity: faker.address.streetAddress(),
  open_now: true
})

exports.seed = function(knex) {
  const fakePlaces = []
  const totalPlaces = 100
  // Deletes ALL existing entries
  return knex("places").del().then(async function() {
    for (let i = 0; i < totalPlaces; i++) {
      fakePlaces.push(createPlace())
    }
    // Inserts seed entries
    return knex("places").insert(fakePlaces)
  })
}
