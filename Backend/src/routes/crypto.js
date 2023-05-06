const express = require('express');
const router = express.Router();
const cors = require('cors');
const CryptoPrice = require('../models/crypto');
router.use(cors());
router.get('/crypto', async (req, res) => {
  try {
    const cryptoPrices = await CryptoPrice.find().limit(10).sort({ volume: -1 });
    res.json(cryptoPrices);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
