const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('in the articles');
})

module.exports = router;