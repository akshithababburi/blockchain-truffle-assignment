# blockchain-truffle-assignment

1) Install truffle by typing "npm install truffle -g"
2) Initialize the project by "truffle init" and it will create a project structure
3) I have created a new contract by name "Helloworld.sol" and "HelloWorldPermanent.sol"
4) I have created a second file in migrations directory by name "2_hello_world_migration.js" which is needed for our contracts deployment
5) Check the compilation erros by typing "truffle compile"
6) Enter into truffle console by typing "truffle develop"
7) Deploy locally using the command "truffle migrate"

----------- To deploy onto test net network-----------

1) I have used infura and followed the document at "https://docs.infura.io/infura/tutorials/ethereum/deploy-a-contract-using-truffle"
2) inorder to use the hard wallet, I have installed the hdwallet-provider by typing "npm install @truffle/hdwallet-provider"
3) I have created the .env file in the project to add the INFURA API Key and Mnemoic 
4) The menomic key is retreived by typing "npx mnemonics"
5) I have signed up for ethereum main net on "https://infura.io/"
6) I have changed the truffle-config.js to include the hd wallet, infura api key and goerli provider
7) I have got faucet Eth from "https://ethdrop.dev/"
8) Finally I have deployed my contract to the ethereum network by running the following command "truffle migrate --network goerli"

You can check my contract on the ethereum network by going to "https://goerli.etherscan.io/address/0x8cd41a02af5ef159ad5b4c8d7544b8bc65aaabe0"
