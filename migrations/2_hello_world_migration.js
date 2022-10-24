const Helloworld = artifacts.require("Helloworld");
const HelloworldPermanent = artifacts.require("HelloworldPermanent");

module.exports = function (deployer) {
    // deployer.deploy(Helloworld, "Hello and welcome to blockchain").then(async () => {
    //     let instance = await Helloworld.deployed();
    //     let message = instance.message();
    //     return deployer.deploy(HelloworldPermanent, message);
    // }
    // );
    deployer.deploy(Helloworld, "Hello and welcome to blockchain")
};