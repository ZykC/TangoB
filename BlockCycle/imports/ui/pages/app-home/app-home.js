/*global Template, Session, window, updateAccountInfo*/
/*jshint esversion:6*/

import './app-home.css';
import './app-home.html';

if (Meteor.isClient) {

  //Material = new Mongo.Collection("material");

  var material_id = 0;
  
  Template.App_home.helpers({materials:Materials.find()})

  Template.App_home.events({
    'click .js-show-image-form':function(event){
      material_id = this;
      $("#image_add_form").modal('show');
    }
  });

  Template.image_add_form.events({
  'submit .js-add-image':function(event){
    var img_src, img_alt;
      organization_name = event.target.organization_name.value;
      benef_address = event.target.benef_address.value;

      console.log("material id: "+Materials);

      console.log("Materials findOne: "+Materials.findOne());
      
        Transports.insert({

          material_name:material_id.obj_name,

          sourcer_name:material_id.obj_sourcer,

          sourcer_address:material_id.obj_address,

          sourcer_identifier:material_id.obj_sourcer_address,

          organization_name:organization_name,

          benef_address:benef_address,

          benef_address_id:web3.eth.accounts[0],

          photo:material_id.img_src,
          
          createdOn:new Date()
        });


      $("#image_add_form").modal('hide');
      myContract.addMeterial(" sourcer: "+Materials.findOne().obj_sourcer, " sourcer address: "+ Materials.findOne().obj_address, " sourcer id: " +Materials.findOne().obj_sourcer_address, " end user: "+organization_name, "end user address: "+benef_address + "end user id: "+Transports.findOne().benef_address_id, function(error, result){
        if(!error)
          console.log("resutl: "+result)
        else
          console.log("error: "+error)
        })
      Materials.remove({_id: material_id._id})

      //document.getElementById("aquireBtn").disabled = 'true';
   return false;
  }
  });

}