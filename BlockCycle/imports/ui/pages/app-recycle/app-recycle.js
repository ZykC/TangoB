import './app-recycle.css';
import './app-recycle.html';
console.log("App-recycle "+Materials.find().count());

if (Meteor.isClient)
{
  var material_id = 0;
  
  Template.App_recycle.helpers({transports:Transports.find()});

  Template.App_recycle.events({
      'click .js-show-image-form':function(event){
        material_id = this;
        $("#Transport_form").modal('show');
      }

  });

  Template.Transport_form.events({
    'submit .js-add-image':function(event){
      var img_src, img_alt;

        organization_name = event.target.organization_name.value;
        benef_address = event.target.benef_address.value;

      //  console.log("Materials findOne in Transports: "+material_id.obj_address);
      console.log(material_id.obj_address)
        
          Transporting.insert({

            obj_hash:material_id.obj_hash,

            material:material_id.material_name,

            from_address:material_id.sourcer_address,

            to_identifier:material_id.benef_address,

            Transporter_name:organization_name,

            Transporter_address:benef_address,

            Transporter_id:web3.eth.accounts[0],

            photo:material_id.photo,
            
            createdOn:new Date()
          });

        var transportInfo = material_id.material_name + material_id.sourcer_address + material_id.benef_address + organization_name + benef_address;
        var transportHash = web3.sha3(transportInfo);

        $("#Transport_form").modal('hide');

        myContract.transportMaterial(material_id.obj_hash, transportHash, web3.eth.accounts[0], function(error, result){
        if(!error)
          console.log("resutl: "+result)
        else
          console.log("error: "+error)
        })

        console.log("material_id.materialHash: "+material_id.materialHash)

        console.log("transportHash: "+transportHash)

        console.log("web3.eth.accounts[0]: "+web3.eth.accounts[0])
        
        Transports.remove({_id: material_id._id})

     return false;
    }
    });
}