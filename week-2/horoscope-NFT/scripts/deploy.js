const { ethers } = require("hardhat");

const main = async () => {
  const contractFactory = await ethers.getContractFactory("Greeter");
  const contract = await contractFactory.deploy("Hello World");

  console.log("Deploying contract...");

  await contract.waitForDeployment();

  const contractAddress = contract.getAddress();
  console.log("Greeter contract address:", contractAddress);
  console.log("Contract deployed successfully.");
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
