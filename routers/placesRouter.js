const express = require("express")
const places = require("./models/placesModel")

const router = express.Router()


router.get("/all", async (req, res, next) => {
    places
    .findPlaces()
    .then(content => {
        if (content === undefined || content.length == 0) {
            res.status(404).json({ message: "no places found" })
        } else {
            res.status(200).json(content)
        }

    })
    .catch((err) => next(err))
})

router.get('/skipstate/:city/', async (req, res, next) => {

    places
        .findPlaceByCity(req.params.city)
        .then(content => {
            if (content === undefined || content.length == 0) {
                console.log(req.params.city)
                res.status(404).json({ message: 'Could not find place.' })
            } else {
                res.status(200).json(content)
            }
        })
        .catch(err => next(err))
})

router.get('/:state/:city', async (req, res, next) => {

    places
        .findPlaceByCityAndState(req.params.state, req.params.city)
        .then(content => {
            if (content === undefined || content.length == 0) {
                res.status(404).json({ message: 'Could not find place.' })
            } else {
                res.status(200).json(content)
            }
        })
        .catch(err => next(err))
})

router.get('/:state/', async (req, res, next) => {

    places
        .findPlaceByState(req.params.state)
        .then(content => {
            if (content === undefined || content.length == 0) {
                res.status(404).json({ message: 'Could not find place.' })
            } else {
                res.status(200).json(content)
            }
        })
        .catch(err => next(err))
})

module.exports = router
