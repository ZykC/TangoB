import './app-market.css';
import './app-market.html';

Template.App_market.helpers({

});


Template.App_market.events({
    'submit .buyDomain'(event) {
        //event.preventDefault();

        console.log("hello");

    },
    'submit .sellDomain'(event){
        //event.preventDefault();

        // Get value from form element

        var name = event.target.name.value;
        var source = event.target.source.value;
        var description = event.target.description.value;
        var address = event.target.address.value;
        var value = event.target.value.value;
        var weight = event.target.weight.value;
        var volume = event.target.volume.value;
        var price = event.target.price.value;
        var img_src = event.target.img_src.value;
       // const picture = target.picture.value;
        var materialInfos = name + source + description + address + value + weight + volume  + price + img_src;
        var materialHash = web3.sha3(materialInfos);
        myContract.addMeterial(materialHash, web3.eth.accounts[0], " Price: "+ price, function(error, result){
        if(!error)
          console.log("resutl: "+result)
        else
          console.log("error: "+error)
        })
        // window.blockCycleContract.addMaterial("hvac3", "building", "12Kg", "elec", 1, 11, 22, {from: web3.eth.defaultAccount, gas:3000000}, function (e, r) { console.log(e); console.log(r); })

        Materials.insert({
            obj_hash:materialHash,
            img_src:img_src,
            img_alt:"photo",
            obj_name:name,
            obj_sourcer:source,
            obj_desc:description,
            obj_val:value,
            obj_address:address,
            obj_weight:weight,
            obj_volume:volume,
            obj_price:price,
            obj_sourcer_address:web3.eth.accounts[0],
            createdOn:new Date()
            
          });
        console.log(web3.eth.accounts[0]);
            //createdBy:Meteor.user()._id
    },
});
