const router = require('express').Router();

router.get('/', (_, res) => {
  res.status(200).json(new Date());
});

module.exports = router;
