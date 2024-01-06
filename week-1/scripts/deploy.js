const { ethers } = require("hardhat");

const main = async () => {
  const contractFactory = await ethers.getContractFactory("HelloWorld");
  console.log("Deploying contract...");
  const contract = await contractFactory.deploy("Hola!"); // add arguments in deploy() only when the constructor in the smart contract requires
  const txHash = contract.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  console.log("Contract deployed to address: ", txReceipt.contractAddress);
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
