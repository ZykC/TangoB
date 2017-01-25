contract blockcycle {

	mapping (address => uint) balances;

	struct Material{
		uint id;
		string addressBC;
		string name;
		string desc;
		string _address;
		string price;
		string sourcer;
		string benef;
	}
	
	function toString(address x) returns (string) {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++)
            b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
        return string(b);
    }
	uint public materialsCount = 0;
	mapping (uint => Material) public materials;
	

	function blockcycle(){
		//initialize liste of materials
	}

	function addMeterial(
						string _name, 
						string _description, 
						string userAddress,
						string __address,
						string _price){
		materials[materialsCount].id = materialsCount;
		materials[materialsCount].name = _name;
		materials[materialsCount].desc = _description;
		materials[materialsCount]._address = __address;
		materials[materialsCount].price = _price;
		materials[materialsCount].sourcer = userAddress;
		materials[materialsCount].benef = "0x00000";
		materialsCount++;

	}

	function bookMaterial(uint _id, string benef_address){
		materials[_id].benef = benef_address;
/*
		if (balances[msg.sender] < materials[_id].price){
			return;
		}else{
			balances[msg.sender] = balances[msg.sender] - materials[_id].price;
			balances[materials[materialsCount].sourcer] = balances[materials[materialsCount].sourcer] + materials[_id].price;
			materials[materialsCount].contributersNumber++;
		}*/

	}

}

