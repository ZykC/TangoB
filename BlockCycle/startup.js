

//import Web3 from 'web3';
// initialize web3
//window.web3 = new Web3();
// set the provider to our local node
//web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));



if (Meteor.isServer){
  Meteor.startup(function(){
  	//Material = new Mongo.Collection("material");

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
/*
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
		);*/

		// count the images!
		console.log("startup.js says: "+Materials.find().count());
	}// end of if have no images
  });
}