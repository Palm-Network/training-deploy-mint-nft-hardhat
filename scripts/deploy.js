async function main() {
    const nftContract = await ethers.getContractFactory("NFT");
    
    // Start deployment, returning a promise that resolves to a contract object
    const nft = await nftContract.deploy();
    console.log("Contract deployed to address:", nft.address);
    }
    
    main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
