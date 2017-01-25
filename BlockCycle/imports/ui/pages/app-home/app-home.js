/*global Template, Session, window, updateAccountInfo*/
/*jshint esversion:6*/

import './app-home.css';
import './app-home.html';

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
var material_id;
Template.App_home.events({
  'click .js-show-image-form':function(event){
    material_id = this;
    console.log(material_id);
    $("#image_add_form").modal('show');
},

});

Template.image_add_form.events({
'submit .js-add-image':function(event){
  var img_src, img_alt;
    console.log("form showen")
    organization_name = event.target.organization_name.value;
    benef_address = event.target.benef_address.value;
    console.log("src: "+organization_name+" alt:"+benef_address);
    console.log(myContract);
      Transports.insert({
        sourcer:obj_id.obj_sourcer_address,
        organization_name:organization_name,
        benef_address:benef_address,
        createdOn:new Date()
      });
    $("#image_add_form").modal('hide');
    //document.getElementById("aquireBtn").disabled = 'true';
 return false;
}
});