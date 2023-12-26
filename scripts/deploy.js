const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
const [deployer] = await ethers.getSigners();

// Deploy the StorageVictim contract
console.log("Deploying StorageVictimResolved with the account:", deployer.address);
const StorageVictimResolved = await ethers.getContractFactory("StorageVictimResolved");
const storageVictimResolved = await StorageVictimResolved.deploy();

//await storageVictimResolved.deploy();

console.log("StorageVictimResolved contract deployed to:", storageVictimResolved.address);

console.log("Deployment completed!");
}

main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});

