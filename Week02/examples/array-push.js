var arr = [];

for (var i = 0; i < 4; i++){
	arr.push( {value: i, name: 'Item ' + i} )
}

console.log(arr);

for (var i = 0; i < 4; i++){
	delete arr[i].value;
}

console.log(arr);
