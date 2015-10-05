var tmp = [1,2,3,4,5];

Array.prototype.foo = function() {
	return 'bar'
}

for (val in tmp)
	//console.log(val)
	console.log(tmp[val]
