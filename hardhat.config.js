// hardhat.config.cjs
// hardhat.config.cjs

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");   // 必须！

/** @type import('hardhat/types').Config */
module.exports = {
  solidity: "0.8.30",

  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.SEPOLIA_PRIVATE_KEY ? [process.env.SEPOLIA_PRIVATE_KEY] : [],
    },
    hardhat: {
      // 使用默认设置
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};