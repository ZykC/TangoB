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

var contractABI =  [{"constant":false,"inputs":[{"name":"n","type":"uint256"}],"name":"test","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"address"}],"name":"toString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"address"},{"name":"_hash","type":"string"},{"name":"_benef","type":"address"}],"name":"bookMaterial","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"materialsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"address"},{"name":"sep","type":"string"},{"name":"_sourcer","type":"address"}],"name":"addMeterial","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"materials","outputs":[{"name":"id","type":"address"},{"name":"sourcerId","type":"address"},{"name":"benefId","type":"address"},{"name":"hashRecycled","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];

var myContract;

//var Blockcycle = web3.eth.contract(contractABI);
//var myContract = web3.eth.contract(contractABI).at(contractAddress);
if (Meteor.isClient){

	window.myContract =  web3.eth.contract(contractABI).at("0xd6a56894175204e5f09b5b376f20004a58284b2c");

	console.log(window.myContract)
}
