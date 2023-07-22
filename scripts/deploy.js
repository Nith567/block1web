// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");

async function main() {
  try {
    // Deploy the "Greeter" contract
    // const Greeter = await hre.ethers.getContractFactory("Greeter");
    // const greetingMessage = "Hello, World!"; // Set the initial greeting message
    // const greeter = await Greeter.deployContract(greetingMessage);

    //0xE6D7566119D625c1C71fF5B819fA8fa29150Ae97
    const Greeter= await ethers.deployContract("Greeter",["Hello World Bro"])
    await Greeter.waitForDeployment();

    console.log("Greeter deployed to:", await Greeter.getAddress());
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
