const express = require('express');
const router = express.Router();
const { courtName } = require("../models");

router.post('/', async(req, res) =>{
    const post = req.body;
    await addCourtName.create(post);
    res.json(post);
});

module.exports = router;