
const Track = require("../models/track")
const express = require("express")
const router = express.Router()

// GET /tracks/:trackId
router.post('/', async (req, res) => {
    try {
        const newTrack = await Track.create(req.body);
        res.status(201).json({
            message: "Successfully Created Track",
            track: newTrack,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// GET /tracks
router.get("/", async (req, res) => {
    try {
        const tracks = await Track.find();
        res.status(200).json(tracks);
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
});

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

router.delete("/:trackId", async (req, res) => {
  try {
    const foundTrack = await Track.findById(req.params.trackId);
    if (!foundTrack) {
        res.status(404)
        throw new Error("Track not Found")
    };

    await foundTrack.deleteOne();
    res
      .status(200)
      .json({ message: "Track Successfully Deleted", track: foundTrack });
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ err: error.message });
    } else {
      res.status(500).json({ err: error.message });
    }
  }
});

router.put('/:trackId', async (req, res)=>{
    try {
        const updatedTrack = await Track.findByIdAndUpdate(req.params.trackId, req.body, {new: true})

        if(!updatedTrack) return res.status(404).json({ message: "Track Not Found" });

        res.status(200).json({
            message: "Created Successfully",
            track: updatedTrack
        })
    } catch (error) {
         res.status(500).json({ err: error.message });
    }
})

module.exports = router;