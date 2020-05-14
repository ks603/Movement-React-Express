const express = require('express')
const router = express.Router()

//  @route GET api/autg
router.get('/', (req, res) => res.send('Auth route'))

module.exports = router