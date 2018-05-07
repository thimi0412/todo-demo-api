const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
  let userId = req.body.userId;
  let condition = {
    where: {
      user_id: userId,
      is_stared: true,
      is_deleted: false,
    }
  };

  db.Task.findAll(condition)
  .then((response) => {
    res.json({
      status: 200,
      message: 'success getting stared tasks',
      content: response
    });
  })
  .catch((error) => {
    res.json({
      status: 200,
      message: 'fail getting stared tasks',
      content: error
    });
  });
});

module.exports = router;