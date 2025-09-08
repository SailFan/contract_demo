const { error } = require("console");
const { ethers } = require("hardhat")
async function main (){
    const fundMeFactory = await ethers.getContractFactory("fundMe");
    const fundMe = await fundMeFactory.deploy();
    await fundMe.waitForDeployment();
    console.log(`Contract has been deployed successfully. Contract address: ${fundMe.target}`);

}

main()
  .then(() => {})
  .catch((error) => {
    console.error('An error occurred:', error); 
    process.exit(1);
  });