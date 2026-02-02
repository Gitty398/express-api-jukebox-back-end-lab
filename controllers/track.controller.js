
const Track = require("../models/track")
const express = require("express")
const router = express.Router()

router.post('/', async (req, res) => {
    try{
        const newTrack = await Track.create(req.body);
        res.status(201).json({
            message: "Successfully Created Track",
            track: newTrack,
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


module.exports = router;