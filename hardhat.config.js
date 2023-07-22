require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.INFURA,
      accounts: [process.env.PRIVATE]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN,
  },
  solidity: "0.8.19",
};
