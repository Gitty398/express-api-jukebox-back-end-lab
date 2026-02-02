
const Track = require("../models/track")
const express = require("express")
const router = express.Router()

// GET /tracks/:trackId

router.get("/:trackId", async (req, res) => {
    try {
        const foundTrack = await Track.findById(req.params.trackId);

        if (!foundTrack) return res.status(404).json({ message: "Track Not Found" });

        res.status(200).json({ foundTrack });
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
});



module.exports = router;