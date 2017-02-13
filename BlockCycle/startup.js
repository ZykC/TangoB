

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
		for (var i = 4; i < 6; i++)
		{
			Materials.insert(
				{

 
		            img_src:"img_"+i+".jpg",
		            img_alt:"photo",
		            obj_name:"material "+i,
		            obj_sourcer:"Company "+i,
		            obj_desc:"Description "+i +" Non ergo erunt homines deliciis diffluentes audiendi, si quando de amicitia, quam nec usu nec ratione habent cognitam, disputabunt. Nam quis est, pro deorum fidem atque hominum! qui velit, ut neque diligat quemquam nec ipse ab ullo diligatur, circumfluere omnibus copiis atque in omnium rerum abundantia ",
		            obj_val:"85",
		            obj_address:"Address of material "+i+ " Haec enim est tyrannorum vita nimirum, in qua nulla fides, nulla caritas.",
		            obj_weight: i,
		            obj_volume:i/10,
		            obj_price:i*15+i^2*3,
		            obj_sourcer_address:"0x7E279DEa1BE831cCE007BA3C74a28277f8c277d1",
		            createdOn:new Date()
				}
			);

		// count the images!
		console.log("startup.js says: "+Materials.find().count());
		} // end of for insert Material loop

		for (var i = 11; i < 16; i++)
		{
			Transports.insert({

		          material_name:"material "+i,

		          sourcer_name:"company "+i,

		          sourcer_address:"address company "+i+" nulla stabilis benevolentiae potest esse fiducia.",

		          sourcer_identifier:"0x8H315RFc1BE831cCE007BA3C74a28277f8c277d1",

		          organization_name:"company "+i*5,
		          
		          benef_address:"benef " + (i*5) + " address" + " Asperos dignitatis delatae oppido regebat administrante forensium sed administrante insolenter haec excitatur negotiorum huius decuerat.",

		          benef_address_id:"0x7E279DEa1BE831cCE007BA3C74a28277f8c277d1",

		          photo:"img_"+i+".jpg",
		          
		          createdOn:new Date()
        	});

		}// end of for add transport material

		for (var i = 6; i < 11; i++)
		{
			Transporting.insert({

	            material:"material "+i,

	            from_address:"address "+i + " Sed confertos persultat obvios mollia et sed hic municipia perterrens et.",

	            to_identifier:"address "+i*3+" Subito conatibus est ad quidam exustus urbis vivus quidam visus.",

	            Transporter_name:"transporter "+i*4,

	            Transporter_address:"address transporter "+i*4 + " Mollia per nunc sed quae montium isdem quod si rectum statuerimus vel.",

	            Transporter_id:"0x7E279DEa1BE831cCE007BA3C74a28277f8c277d1",

	            photo:"img_"+i+".jpg",
	            
	            createdOn:new Date()
          });

		}// end of for add transporting material

	}// end of if have no images
  });
}