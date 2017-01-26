Materials = new Mongo.Collection("materials");

Transports = new Mongo.Collection("transports");

Transporting = new Mongo.Collection("transporting");


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//var contractAddress = "0x75fe7f57dbb0cddbb97defba2e5199f41476c082";

var contractABI = [{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"benef_address","type":"string"}],"name":"bookMaterial","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"address"}],"name":"toString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"materialsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"materials","outputs":[{"name":"id","type":"uint256"},{"name":"addressBC","type":"string"},{"name":"name","type":"string"},{"name":"desc","type":"string"},{"name":"_address","type":"string"},{"name":"price","type":"string"},{"name":"sourcer","type":"string"},{"name":"benef","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_description","type":"string"},{"name":"userAddress","type":"string"},{"name":"__address","type":"string"},{"name":"_price","type":"string"}],"name":"addMeterial","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]

var myContract;

//var Blockcycle = web3.eth.contract(contractABI);
//var myContract = web3.eth.contract(contractABI).at(contractAddress);
if (Meteor.isClient){

	window.myContract =  web3.eth.contract(contractABI).at("0x384da65d3064daa76d8d72abe8ff749550499d78");
}
