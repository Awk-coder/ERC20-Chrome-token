const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("ChromeToken");
  const faucet = await Faucet.deploy();

  await faucet.deployed();

  console.log("Faucet deployed: ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});