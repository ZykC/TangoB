

contract BlockCycle{

	mapping (address => uint) balances;


// 	Material[] public materials;// = new Material()[];

	enum State {OnRecyclingMarket, OnTransport, InStore, InReparation, CertifiedForUse, Waste}

	struct Material{
		string name;
		uint id;
		string origin;
		string weight;
		string material_type;
		State state;
		string price;
		uint ecoValue;
// 		address[] ownersList;
        uint numOwnersList;
        mapping (uint => address) ownersList;
        mapping (uint => uint) ownersActions;
        mapping (uint => string) comments;
	}

	uint public numMaterials = 0;
    mapping (uint => Material) public materials;

	function BlockCycle(){
		// initialize liste of materials

	}

// 	function getAllMaterials() returns (Materials) {
// 	    return materials;
// 	}

// "hvac", "building", "12Kg", "elec", 1, 11, 22
	function addMaterial(string _name, string _source, string _weight, string _material_type, State _state, string _price, uint _ecoValue) returns (bool){
		materials[numMaterials].name = _name;
		materials[numMaterials].id = numMaterials;
		materials[numMaterials].origin = _source;
		materials[numMaterials].weight = _weight;
		materials[numMaterials].material_type = _material_type;
		materials[numMaterials].state = _state;
		materials[numMaterials].price = _price;
		materials[numMaterials].ecoValue = _ecoValue;
		materials[numMaterials].ownersList[0] = msg.sender;
        materials[numMaterials].numOwnersList++;
        numMaterials++;

		return true;
	}

	function test(string q, uint w) returns (uint) {
	  w++;
	  return w;
	}

	function changeOwner(uint _id){
		materials[_id].ownersList[materials[_id].numOwnersList] = msg.sender;
	}

	function changeState(uint _id, State newState){
		materials[_id].state = newState;
	}

  function changeWeight(uint _id, string newW){
		materials[_id].weight = newW;
	}

	function sharingMaterial(uint _id, string action){
		materials[_id].ownersList[materials[_id].numOwnersList] = msg.sender;
		materials[_id].state = State.OnRecyclingMarket;
		materials[_id].ownersActions[materials[_id].numOwnersList] = 1;
		materials[_id].comments[materials[_id].numOwnersList] = action;
		materials[_id].numOwnersList++;
	}

	function transportingMaterial(uint _id, string action){

		materials[_id].ownersList[materials[_id].numOwnersList] = msg.sender;
		materials[_id].state = State.OnTransport;
		materials[_id].ownersActions[materials[_id].numOwnersList] = 2;
		materials[_id].comments[materials[_id].numOwnersList] = action;
		materials[_id].numOwnersList++;
	}

	function storingMaterial(uint _id, string action){

		materials[_id].ownersList[materials[_id].numOwnersList] = msg.sender;
		materials[_id].state = State.InStore;
		materials[_id].ownersActions[materials[_id].numOwnersList] = 1;
		materials[_id].comments[materials[_id].numOwnersList] = action;
		materials[_id].numOwnersList++;
	}

	function repairingMaterial(uint _id, string action){

		materials[_id].ownersList[materials[_id].numOwnersList] = msg.sender;
		materials[_id].state = State.InReparation;
		materials[_id].ownersActions[materials[_id].numOwnersList] = 3;
		materials[_id].comments[materials[_id].numOwnersList] = action;
		materials[_id].numOwnersList++;
	}

	function certifyingMaterial(uint _id, string action){

		materials[_id].ownersList[materials[_id].numOwnersList] = msg.sender;
		materials[_id].state = State.CertifiedForUse;
		materials[_id].ownersActions[materials[_id].numOwnersList] = 1;
		materials[_id].comments[materials[_id].numOwnersList] = action;
		materials[_id].numOwnersList++;
		reward(_id);
	}

	function reward(uint _id){
		uint coeffSum = 0;
		for(uint i = 0 ; i < materials[_id].numOwnersList; i++)
			coeffSum += materials[_id].ownersActions[i];
		uint value = materials[_id].ecoValue * materials[_id].ownersActions[i] ;

		value /= coeffSum;

		for(i = 0 ; i < materials[_id].numOwnersList; i++)
			rewardContributor(materials[_id].ownersList[i], value);


	}

	function rewardContributor(address _to, uint _value) returns (bool success) {
		balances[_to] += _value;
	}





}