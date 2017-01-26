import './app-recycle.css';
import './app-recycle.html';
console.log("App-recycle "+Materials.find().count());

if (Meteor.isClient)
{


  var material_id = 0;
  
  Template.App_recycle.helpers({

  	registeredDomains: function() {
          
          let to_return = [];
          var cursor = Transports.find();
          // get the number of currently registered domains
        //  let numRegistered = window.dnsRegistryContract.numRegistered().toNumber(10);

          // loop through each registered domain in the contract and add it to an array
         console.log("Transports count: "+Transports.find().count())

        	cursor.forEach(function(x) {
                	
                	 let obj_img = x.photo;

        			     let obj_name = x.sourcer_name;
  	               let sourcer_address = x.sourcer_address;
  	               let sourcer_identifier = x.sourcer_identifier;

  	               let organization_name = x.organization_name;
                	 let benef_address = x.benef_address;
                	 let benef_address_id = x.benef_address_id;

                    to_return.push({
      	                obj_img: obj_img,
      		              obj_name: obj_name,
      		              sourcer_address: sourcer_address,
      		              sourcer_identifier: sourcer_identifier,
      		              organization_name: organization_name,
      	                benef_address: benef_address,
      		            benef_address_id: benef_address_id 
                  	});
  				});
          // return the registered domains array
          return to_return;
      }
  });

  Template.App_recycle.events({
      'click .js-show-image-form':function(event){
        material_id = Transports.findOne();
        $("#Transport_form").modal('show');
      }

  });

  Template.Transport_form.events({
    'submit .js-add-image':function(event){
      var img_src, img_alt;

        organization_name = event.target.organization_name.value;
        benef_address = event.target.benef_address.value;

        console.log("Materials findOne in Transports: "+material_id.obj_address);
        
          Transporting.insert({

            from_address:material_id.obj_address,

            to_identifier:material_id.obj_sourcer_address,

            Transporter_name:organization_name,

            Transporter_address:benef_address,

            Transporter_id:web3.eth.accounts[0],

            photo:material_id.img_src,
            
            createdOn:new Date()
          });


        $("#Transport_form").modal('hide');
        myContract.addMeterial(" From: "+Transporting.findOne().from_address, " To: "+Transporting.findOne().to_identifier, " By: " + Transporting.findOne().Transporter_id, function(error, result){
        if(!error)
          console.log("resutl: "+result)
        else
          console.log("error: "+error)
        })
        Transports.remove({_id: material_id._id})
        

        //document.getElementById("aquireBtn").disabled = 'true';
     return false;
    }
    });
}