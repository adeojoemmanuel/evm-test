async function main() {
  const USDK = await ethers.getContractFactory("USDK");
  const myContract = await USDK.deploy();

  await myContract.deployed();

  console.log("Deplooy contract to:", myContract.address);
}
  
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
  