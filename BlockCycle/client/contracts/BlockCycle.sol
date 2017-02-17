contract blockcycle {

	mapping (address => uint) balances;
    
	struct Material{
		bytes32 _id;
		address sourcerId;
		address benefId;
	//	string hashAvailable;
	    address transId;
		bytes32 hashRecycled;
		bytes32 hashTransported;
		bytes32 hashReceived;
	}
	
	function toString(address x) returns (string) {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++)
            b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
        return string(b);
    }
	uint public materialsCount = 0;
	mapping (bytes32 => Material) public materials;
	
    
	function blockcycle(){
		//initialize liste of materials
	}
	
	function test(uint n){
	    materialsCount = 10;
	}

	function addMaterial(bytes32 _hash, address _sourcer){
	//	materials[_id].id = materialsCount;
		materials[_hash]._id = _hash;
		materials[_hash].sourcerId = _sourcer;
		materials[_hash].benefId = 0x00;
		materialsCount++;
	}

	function bookMaterial(bytes32 _id, bytes32 _hash, address _benef){
		materials[_id].hashRecycled = _hash;
		materials[_id].benefId = _benef;

	}
	
	function transportMaterial(bytes32 _id, bytes32 _hash, address _trans){
	    materials[_id].hashTransported = _hash;
	    materials[_id].transId = _trans;
	    
	}
	
	function receiveMaterial(bytes32 _id, bytes32 _hash){
	    materials[_id].hashReceived = _hash;
	}

}

