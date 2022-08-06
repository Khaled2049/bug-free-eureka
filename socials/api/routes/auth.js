const router = require('express').Router();
const User = require('../models/User');

// Register
router.get('/register', async (req, res) => {
  const user = await new User({
    username: 'Khaled',
    email: '1@2.com',
    password: '1231234123',
  });
  await user.save();
  res.send('OK');
});

module.exports = router;
