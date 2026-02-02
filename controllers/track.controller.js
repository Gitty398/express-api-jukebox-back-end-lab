
const Track = require("../models/track")
const express = require("express")
const router = express.Router()


// GET /tracks
router.get("/", async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;