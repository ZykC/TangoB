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

var contractABI =  [{"constant":false,"inputs":[{"name":"n","type":"uint256"}],"name":"test","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_hash","type":"bytes32"}],"name":"receiveMaterial","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"address"}],"name":"toString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"materialsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_hash","type":"bytes32"},{"name":"_benef","type":"address"}],"name":"bookMaterial","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"_sourcer","type":"address"}],"name":"addMaterial","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_hash","type":"bytes32"},{"name":"_trans","type":"address"}],"name":"transportMaterial","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"materials","outputs":[{"name":"_id","type":"bytes32"},{"name":"sourcerId","type":"address"},{"name":"benefId","type":"address"},{"name":"transId","type":"address"},{"name":"hashRecycled","type":"bytes32"},{"name":"hashTransported","type":"bytes32"},{"name":"hashReceived","type":"bytes32"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];

var myContract;

//var Blockcycle = web3.eth.contract(contractABI);
//var myContract = web3.eth.contract(contractABI).at(contractAddress);
if (Meteor.isClient){

	window.myContract =  web3.eth.contract(contractABI).at("0xe92dd60a033c605bb2bcfc77727b8e17b5e6c9e7");

	console.log(window.myContract)
}


