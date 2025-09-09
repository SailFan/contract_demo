import { ethers } from "hardhat";
import fs from 'fs';
import path from "path";


// const { error } = require("console");
// const { ethers } = require("hardhat")
// async function main (){
//     const fundMeFactory = await ethers.getContractFactory("fundMe");
//     const fundMe = await fundMeFactory.deploy(10);
//     await fundMe.waitForDeployment();
//     console.log(`Contract has been deployed successfully. Contract address: ${fundMe.target}`);

// }

// main()
//   .then(() => {})
//   .catch((error) => {
//     console.error('An error occurred:', error); 
//     process.exit(1);
//   });


async function main(){
    try{
        console.log("🚀 开始部署 FundMe 合约...")
        const fundMeFactory = await ethers.getContractFactory("fundMe")
        const fundMe = await fundMeFactory.deploy(10);
        console.log("🚀 开始部署 FundMe 合约...")
        await fundMe.waitForDeployment();
        const contractAddress = await fundMe.getAddress();
        console.log("✅ 合约部署成功!");
        console.log(`📝 合约地址: ${contractAddress}`);
        console.log(`🔗 交易哈希: ${fundMe.deploymentTransaction().hash}`);
        return contractAddress;
    }catch(error){
         console.error("❌ 部署失败:", error);
         throw error;
    }
}


        

        
        

// async function main() {
//     try {
//         const address = await deployFundMe();
//         console.log("🎉 部署完成!");
//         process.exit(0);
//     } catch (error) {
//         console.error("💥 部署过程中发生错误:");
//         console.error(error);
//         process.exit(1);
//     }
// }

// // 执行部署
// main();