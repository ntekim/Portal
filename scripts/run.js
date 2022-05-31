const main = async () => {
    /* This will actually compile our contract and generate the necessary
     * files we need to work with our contract under the artifacts directory.
     *
     * HRE is Hardhat Runtime Environment. hre is an object containing all the functions hardhat exposes when we run a task, script or test. 
     * Hence, we are able to use Hardhat builtin features without importing it, thanks to "npx hardhat {option}" command
    */
    const portalContractFactory = await hre.ethers.getContractFatory("Portal");
    const portalContract = await portalContractFactory.deploy();
    await portalContract.deployed();
    console.log("Contract deployed to:", portalContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0); //0 is a sign to show it is successful, hence doesn't throw error
    } catch (error) {
        console.log(error);
        process.exit(1); //throws an error
    }
}