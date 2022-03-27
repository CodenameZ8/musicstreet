const router = require('express').Router();
const { deploy } = require('../service/deployContract');
const { logger } = require('../lib');

const deployContract = async (req, res) => {
  try {
    const { contractVersion } = req.body;
    const data = await deploy(contractVersion);
    return res.status(200).json(data);
  } catch (e) {
    logger.error(`${JSON.stringify(e)}`);
    return res.sendStatus(500);
  }
};

router.route('/deploy').post(deployContract);
module.exports = router;
