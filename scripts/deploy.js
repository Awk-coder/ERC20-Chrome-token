const hre = require("hardhat");

async function main() {
  const ChromeToken = await hre.ethers.getContractFactory("ChromeToken");
  const chromeToken = await ChromeToken.deploy(100000000, 50);

  await chromeToken.deployed();

  console.log("Chrome Token deployed: ", chromeToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/* ChromeToken deployed address: 0x9A7F0fa6Cdd178E05B357154d0f597466B8681a1 */