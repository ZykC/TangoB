

//import Web3 from 'web3';
// initialize web3
//window.web3 = new Web3();
// set the provider to our local node
//web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}


console.log("init.js")

Materials = new Mongo.Collection("materials");

Transports = new Mongo.Collection("transports");



//var contractAddress = "0x75fe7f57dbb0cddbb97defba2e5199f41476c082";

var contractABI = [{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"benef_address","type":"string"}],"name":"bookMaterial","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"address"}],"name":"toString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"materialsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"materials","outputs":[{"name":"id","type":"uint256"},{"name":"addressBC","type":"string"},{"name":"name","type":"string"},{"name":"desc","type":"string"},{"name":"_address","type":"string"},{"name":"price","type":"string"},{"name":"sourcer","type":"string"},{"name":"benef","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_description","type":"string"},{"name":"userAddress","type":"string"},{"name":"__address","type":"string"},{"name":"_price","type":"string"}],"name":"addMeterial","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]

var myContract;

//var Blockcycle = web3.eth.contract(contractABI);
//var myContract = web3.eth.contract(contractABI).at(contractAddress);
if (Meteor.isClient){

	window.myContract =  web3.eth.contract(contractABI).at("0x384da65d3064daa76d8d72abe8ff749550499d78");
}

if (Meteor.isServer){
  Meteor.startup(function(){
  	

	if (Materials.find().count() == 0){

		Materials.insert(
			{

	            img_src:"img_1"+".jpg",
	            img_alt:"photo",
	            obj_name:"Bureau",
	            obj_sourcer:"Company X",
	            obj_desc:"Je donne un bureau en bois, avec trois tiroirs.bon état général.a venir chercher sur place, démonté.",
	            obj_val:"12",
	            obj_address:"Paris, 20eme arrondissement",
	            obj_weight:"15",
	            obj_volume:"1.5",
	            obj_price:"0",
	            obj_sourcer_address:"0x7E279DEa1BE831cCE007BA3C74a28277f8c277d1",
	            createdOn:new Date()
			}
		);

		Materials.insert(
			{

	            img_src:"img_2"+".jpg",
	            img_alt:"photo",
	            obj_name:"Ordinateur acer",
	            obj_sourcer:"Company Y",
	            obj_desc:"Donne ordinateur car achat de neuf, peut être utiliser en l'état ou pour les pièces.merci.",
	            obj_val:"85",
	            obj_address:"07, boulevard Gaspard Monge, 91120, Palaiseau",
	            obj_weight:"2",
	            obj_volume:"0.1",
	            obj_price:"0",
	            obj_sourcer_address:"0x7E279DEa1BE831cCE007BA3C74a28277f8c277d1",
	            createdOn:new Date()
			}
		);

		Materials.insert(
			{

 
	            img_src:"img_3"+".jpg",
	            img_alt:"photo",
	            obj_name:"Machine à café nespresso",
	            obj_sourcer:"Company Z",
	            obj_desc:"Magimix nespresso qui pour une raison je ne comprends pas l'eau ne se verse pas. un bloquage quelque part mais le moteur marche.",
	            obj_val:"85",
	            obj_address:"6, quai de Watier, 78401 CHATOU cedex",
	            obj_weight:"5",
	            obj_volume:"0.1",
	            obj_price:"0",
	            obj_sourcer_address:"0x7E279DEa1BE831cCE007BA3C74a28277f8c277d1",
	            createdOn:new Date()
			}
		);

		// count the images!
		console.log("startup.js says: "+Materials.find().count());
	}// end of if have no images
  });
}