
require("dotenv").config(); 
require("@chainlink/env-enc").config();


require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");   // 必须！


const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/types').Config */
module.exports = { 
  solidity: "0.8.30",

  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [ PRIVATE_KEY ],
    },
    hardhat: {
      // 使用默认设置
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};









