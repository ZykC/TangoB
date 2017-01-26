import './app-stock.css';
import './app-stock.html';

Template.App_stock.helpers({

	registeredDomains: function() {
      let to_return = [];
      var cursor = Transporting.find();
      var addresses = ["Paris, 20eme arrondissement", "07, boulevard Gaspard Monge, 91120, Palaiseau", "6, quai de Watier, 78401 CHATOU cedex"];
        // get the number of currently registered domains
      //  let numRegistered = window.dnsRegistryContract.numRegistered().toNumber(10);

        // loop through each registered domain in the contract and add it to an array
      console.log("Transports count: "+Transporting.find().count())
      var i=0;
      cursor.forEach(function(x) {

              	  i = i+1;

              	  let obj_img = "img_"+i+".jpg";

      			      let transport_from = addresses[i-1];

	                let transport_to = x.Transporter_address;

	                let transport_by = x.Transporter_name;

	                let transport_id = x.Transporter_id;

                  to_return.push({
    	              obj_img: obj_img,
    		            transport_from: transport_from,
    		            transport_to: transport_to,
    		            transport_by: transport_by,
    		            transport_id: transport_id
                	});
				});
        // return the registered domains array
        return to_return;
    }
});


Template.App_stock.events({
  'click .js-show-image-form':function(event){
      myContract.addMeterial(" Material name: ", " Description: ", " Address: " + " Address on blokcChain: ", web3.eth.accounts[0], " Price: ", function(error, result){
        if(!error)
          console.log("resutl: "+result)
        else
          console.log("error: "+error)
        })
      Transporting.remove({_id: Transporting.findOne()._id})
    }
});
