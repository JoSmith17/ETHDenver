function metaMask() {
// contract abi
var abi = [{
    name: 'myConstantMethod',
    type: 'function',
    constant: true,
    inputs: [{ name: 'a', type: 'string' }],
    outputs: [{ name: 'd', type: 'string' }]
}, {
    name: 'myStateChangingMethod',
    type: 'function',
    constant: false,
    inputs: [{ name: 'a', type: 'string' }, { name: 'b', type: 'int' }],
    outputs: []
}, {
    name: 'myEvent',
    type: 'event',
    inputs: [{ name: 'a', type: 'int', indexed: true }, { name: 'b', type: 'bool', indexed: false }]
}];

// creation of contract object
var MyContract = web3.eth.contract(abi);

// initiate contract for an address
var myContractInstance = MyContract.at('0xc4abd0339eb8d57087278718986382264244252f');

// send a transaction to a function
myContractInstance.myStateChangingMethod('someParam1', 23, { gas: 2000 }, function(err, data){

});

// create filter
var filter = myContractInstance.myEvent({ a: 5 }, function (error, result) {
    if (!error)
        console.log(result);
    /*
    {
        address: '0x8718986382264244252fc4abd0339eb8d5708727',
        topics: "0x12345678901234567890123456789012", "0x0000000000000000000000000000000000000000000000000000000000000005",
        data: "0x0000000000000000000000000000000000000000000000000000000000000001",
        ...
    }
    */
});
}
