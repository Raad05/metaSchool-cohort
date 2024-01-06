const { ethers } = require("hardhat");

require("dotenv").config;

const { CONTRACT_ADDRESS } = process.env;

const main = async () => {
  const contractFactory = await ethers.getContractFactory("HelloWorld");
  const contract = await contractFactory.attach(CONTRACT_ADDRESS);

  // read the current value
  const message = await contract.message();
  console.log("Current message: ", message);

  // updating the current message
  const tx = await contract.update("Hello World");
  await tx.wait();

  // read the updated message
  const newMessage = await contract.message();
  console.log("New message: ", newMessage);
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
