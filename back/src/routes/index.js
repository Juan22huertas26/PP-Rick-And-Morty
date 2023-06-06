const { Router } = require('express');
const router = Router();
const characterRoute = require('./characters/character');


router.use('/characters', characterRoute)


module.exports = router;