// const ConvertLib = artifacts.require("ConvertLib");
const RegistrationContract = artifacts.require("RegistrationContract");
const Auth = artifacts.require("Auth");


module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(RegistrationContract);
  deployer.deploy(Auth);
  

};
