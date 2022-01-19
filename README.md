# Training material: How to deploy an ERC721 contract and mint an NFT on Palm

Training code for Palm documentation. This repo aims at supporting those learning how to deploy an NFT contract and mint an NFT on Palm using `Hardhat` and `Ethers.js`

This repo contains all the finished code explained at: 
* https://docs.palm.io/HowTo/Deploy-using-Hardhat
and at:
* https://docs.palm.io/HowTo/Mint-NFT-using-Hardhat

### Installation
        
    ```bash
    npm install
    ```

### Configuration

Add an `.env` file matching the variables found in `hardhat.config.js`:
INFURA_PROJECT_ID
PRIVATE_KEY
PUBLIC_KEY
CONTRACT_ADDRESS

### Usage

#### Deploy contract to Palm Testnet:
        
    ```bash
    npx hardhat run scripts/deploy.js --network palm_testnet
    ```
        
#### Deploy contract to Palm Mainnet:
        
    ```bash
    npx hardhat run scripts/deploy.js --network palm_mainnet
    ```
        
#### Mint NFT on Palm Testnet:

        
    ```bash
    npx hardhat run scripts/mint.js --network palm_testnet
    ```
        

#### Mint NFT on Palm Mainnet:
        
    ```bash
    npx hardhat run scripts/mint.js --network palm_mainnet
    ```
        
