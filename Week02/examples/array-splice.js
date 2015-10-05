var fruit = ['apple', 'banana', 'orange', 'pear'];

console.log('before', fruit, ', length =', fruit.length);

//fruit.splice(2, 1)	// Removes 1 element from the array beginning at index 2 
delete fruit[2];

console.log('after', fruit, ', length =', fruit.length);

