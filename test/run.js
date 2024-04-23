const main = async () => {
    // This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory.
    const coffeeContractFactory = await hre.ethers.getContractFactory('CoffeePortal');
    const coffeeContract = await coffeeContractFactory.deploy();

    // Simply log the address of the deployed contract
    console.log("Coffee Contract deployed to:", coffeeContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
