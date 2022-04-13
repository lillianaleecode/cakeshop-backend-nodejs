const express = require('express');
const router = express.Router();

router.get('/contacto', (req, res)=>{
    res.send('CONTACTO');

})

module.exports = router;