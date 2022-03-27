const { ethers } = require('hardhat');

const deploy = async (contractVersion) => {
  const ExampleNFT = await ethers.getContractFactory(contractVersion);
  const exampleNFT = await ExampleNFT.deploy();
  await exampleNFT.deployed();
  const txHash = exampleNFT.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  const { contractAddress } = txReceipt;
  console.log('Contract deployed to address:', contractAddress);
  return contractAddress;
};

module.exports = {
  deploy,
};
