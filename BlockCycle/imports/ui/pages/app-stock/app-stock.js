import './app-stock.css';
import './app-stock.html';

Template.App_stock.helpers({transporting:Transporting.find()});


Template.App_stock.events({
  'click .js-show-image-form':function(event){

  		var receivingInfos = this.material + this.from_address + this.to_identifier + this.Transporter_name + this.Transporter_address + this.Transporter_id;
        var receivingHash = web3.sha3(receivingInfos);

        myContract.receiveMaterial(this.obj_hash, receivingHash, function(error, result){
        if(!error)
          console.log("resutl: "+result)
        else
          console.log("error: "+error)
        })

      Transporting.remove({_id: this._id})
    }
});