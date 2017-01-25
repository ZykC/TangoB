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
	            let obj_price = x.obj_price;

            	to_return.push({
                picture: obj_img,
	              name: obj_name,
	             	desc: obj_desc,
	            	weight: obj_weight,
	            	val: obj_val,
	            	price: obj_price
            	});

				});
        // return the registered domains array
        return to_return;
    }
    //
});

Template.App_home.events({
  'click .js-acq-image-form':function(event){
      $("#image_acq_form").modal('show');
      console.log("object address:"+this.obj_address+" obj id: "+this._id);
      obj_id = this.obj_address;
      identifier = this._id;
      Transport.insert({
            _id: this._id,
            obj_address:obj_id, 
            createdOn:new Date(),
            createdBy:Meteor.user()._id
          });
    }


});
Template.image_acq_form.events({
    'submit .js-acq-image':function(event){
      var taker_address;

        taker_address = event.target.taker_address.value;
        object_address = this.obj_address;
        console.log("taker: "+taker_address+"object address:"+object_address);
        myContract.bookMeterial(0, web3.eth.accounts[0], function(error, result){
          if(!error)
          console.log("resutl: "+result)
          else
          console.log("error: "+error)
        })

        if (Meteor.user()){

          Transport.update({_id:identifier}, 
                    {$set: {taker_address:taker_address}});

          console.log(obj_id);
      }
        $("#image_acq_form").modal('hide');
     return false;
    }
  });
