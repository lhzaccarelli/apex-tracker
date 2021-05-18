const express = require('express')
const router = express.Router()

// /api/v1/profile
router.get('/:platform/:gamertag', (req, res) => {
    console.log(req.params.platform, req.params.gamertag)
    res.send("Hello")
})

module.exports = router