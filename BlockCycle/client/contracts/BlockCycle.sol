contract blockcycle {

	mapping (address => uint) balances;

	struct Material{
		address id;
		address sourcerId;
		address benefId;
	//	string hashAvailable;
		string hashRecycled;
	}
	
	function toString(address x) returns (string) {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++)
            b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
        return string(b);
    }
	uint public materialsCount = 0;
	mapping (address => Material) public materials;
	
    
	function blockcycle(){
	    
		//initialize liste of materials
	}
	
	function test(uint n){
	    materialsCount = 10;
	}

	function addMeterial(address _hash, string sep, address _sourcer){
	//	materials[_id].id = materialsCount;
	//	materials[_id].hashAvailable = _hash;
		materials[_hash].sourcerId = _sourcer;
		materials[_hash].benefId = 0x00;
		materialsCount++;
	}

	function bookMaterial(address _id, string _hash, address _benef){
		materials[_id].hashRecycled = _hash;
		materials[_id].benefId = _benef;

	}

}

