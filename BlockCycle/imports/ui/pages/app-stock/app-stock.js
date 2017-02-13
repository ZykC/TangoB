import './app-stock.css';
import './app-stock.html';

Template.App_stock.helpers({transporting:Transporting.find()});


Template.App_stock.events({
  'click .js-show-image-form':function(event){
      myContract.addMeterial(" Transport from: " + "Paris, 20eme arrondissement", " To: "+Transporting.findOne().Transporter_address, " By: "+ Transporting.findOne().Transporter_id, "DELIVERED !", function(error, result){
        if(!error) 
          console.log("resutl: "+result)
        else
          console.log("error: "+error)
        })
      Transporting.remove({_id: this._id})
    }
});