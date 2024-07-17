import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config:HardhatUserConfig = module.exports = {
  solidity: "0.8.24",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};


export default config;