const router = require('express').Router();
const { mint, store } = require('../service/nftService');
const { logger } = require('../lib');

const mintNFT = async (req, res) => {
  try {
    const { contractAddress, metaDataURL } = req.body;
    const data = await mint(contractAddress, metaDataURL);
    return res.status(200).json(data);
  } catch (e) {
    logger.error(`${JSON.stringify(e)}`);
    return res.sendStatus(500);
  }
};

const storeNFT = async (req, res) => {
  try {
    const { file } = req.body;
    const data = await store(file);
    return res.status(200).json(data);
  } catch (e) {
    logger.error(`${JSON.stringify(e)}`);
    return res.sendStatus(500);
  }
};

router.route('/').post(mintNFT);
router.route('/:walletId').post(storeNFT);
module.exports = router;
