const db = require("../../database/data.js")

function findPlaces(id) {
  return db("places").select(
    "places.place_id",
    "places.lat",
    "places.lng",
    "places.city",
    "places.state",
    "places.name",
    "places.image",
    "places.type",
    "places.vicinity",
    "places.open_now"
  )
}

function findPlaceByID(place_id) {
  return db("places").where("place_id", place_id).first()
}

function findPlaceByCityAndState(state, city) {
  return db("places")
    .where("city", city)
    // .first()
    .andWhere("state", state)
    // .first()
}

function findPlaceByLatLng(lat, lng) {
  return db("places")
    .where("lat", lat)
    // .first()
    .andWhere("lng", lng)
    // .first()
}

function findPlaceByState(state) {
  return db("places").where("state", state)
}

function findPlaceByCity(city) {
    return db("places").where("city", city)
  }

module.exports = {
  findPlaces,
  findPlaceByID,
  findPlaceByCityAndState,
  findPlaceByCity,
  findPlaceByState,
  findPlaceByLatLng
}
