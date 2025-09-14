
async function main(){
    try{
        console.log("🚀 开始部署 FundMe 合约...");
          const hre = require("hardhat");
        console.log("📋 hre keys:", Object.keys(hre).sort());

        if (!hre.ethers) {
            throw new Error("❌ ethers is undefined. hardhat-ethers plugin not loaded.");
       }
        const fundMeFactory = await ethers.getContractFactory("FundMe")
        const fundMe = await fundMeFactory.deploy(10);
        console.log("🚀 开始部署 FundMe 合约...")  
        await fundMe.waitForDeployment();
        const contractAddress = await fundMe.getAddress();
        await hre.run("verify:verify", {
        address: fundMe.address,
        constructorArguments: [10], // 如果有构造函数参数，在这里添加
        });
    console.log("✅ 合约验证成功!");
    console.log("🌐 查看合约: https://sepolia.etherscan.io/address/" + fundMe.address);
        console.log("✅ 合约部署成功!");
        console.log(`📝 合约地址: ${contractAddress}`);
        console.log(`🔗 交易哈希: ${fundMe.deploymentTransaction().hash}`);
        return contractAddress;
    }catch(error){
         console.error("❌ 部署失败:", error);
         throw error;
    }
}


main()