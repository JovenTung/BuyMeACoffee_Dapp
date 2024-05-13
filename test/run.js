const main = async () => {

    //fetch the contract and deploy it
      const coffeeContractFactory = await hre.ethers.getContractFactory('CoffeePortal');
      const coffeeContract = await coffeeContractFactory.deploy();
        
     console.log("Coffee Contract deployed to:", coffeeContract.target); //changed the address to target as address was showing undefined
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
    