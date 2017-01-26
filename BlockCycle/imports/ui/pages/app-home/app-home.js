/*global Template, Session, window, updateAccountInfo*/
/*jshint esversion:6*/

import './app-home.css';
import './app-home.html';

if (Meteor.isClient) {

  //Material = new Mongo.Collection("material");

  var material_id = 0;
  
  Template.App_home.helpers({


    registeredDomains: function() {
          let to_return = [];
          var cursor = Materials.find();
          // get the number of currently registered domains
        //  let numRegistered = window.dnsRegistryContract.numRegistered().toNumber(10);

          // loop through each registered domain in the contract and add it to an array
         console.log("Materials count: "+Materials.find().count())

          cursor.forEach(function(x) {
                let obj_img = x.img_src;
                let obj_name = x.obj_name;
                let obj_desc = x.obj_desc;
                let obj_weight = x.obj_weight;
                let obj_val = x.obj_val;
                let obj_address = x.obj_address;
                let obj_price = x.obj_price;
                let obj_sourcer = x.obj_sourcer;
/*
                Material.insert({
                  img_src:x.img_src,
                  img_alt:x.img_alt,
                  obj_name:x.obj_name,
                  obj_sourcer:x.obj_sourcer,
                  obj_desc:x.obj_desc,
                  obj_val:x.obj_val,
                  obj_address:x.obj_address,
                  obj_weight:x.obj_weight,
                  obj_volume:x.obj_volume,
                  obj_price:x.obj_price,
                  obj_sourcer_address:x.obj_sourcer_address,
                  createdOn:new Date()
                });*/

                to_return.push({
                  picture: obj_img,
                  name: obj_name,
                  desc: obj_desc,
                  weight: obj_weight,
                  val: obj_val,
                  address: obj_address,
                  price: obj_price,
                  sourcer: obj_sourcer
                });
          });
          // return the registered domains array
          return to_return;
      }
      //
  });
  Template.App_home.events({
    'click .js-show-image-form':function(event){
      
      $("#image_add_form").modal('show');
    }
  });

  Template.image_add_form.events({
  'submit .js-add-image':function(event){
    var img_src, img_alt;
      organization_name = event.target.organization_name.value;
      benef_address = event.target.benef_address.value;
      material_id = Materials.findOne();
      
      console.log("material id: "+Materials);

      console.log("Materials findOne: "+Materials.findOne());
      
        Transports.insert({

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
      myContract.addMeterial(" sourcer: "+Materials.findOne().obj_sourcer, " sourcer address: "+ Materials.findOne().obj_address, " sourcer id: " +Materials.findOne().obj_sourcer_address, " end user: "+organization_name, "end user address: "+benef_address, "end user id: "+Transports.findOne().benef_address_id, function(error, result){
        if(!error)
          console.log("resutl: "+result)
        else
          console.log("error: "+error)
        })
      Materials.remove({_id: Materials.findOne()._id})

      //document.getElementById("aquireBtn").disabled = 'true';
   return false;
  }
  });

}