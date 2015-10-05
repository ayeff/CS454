var names = ['Joe', 'Mary', 'John'];

var printIndex = function(currentValue, index, arr){
	console.log(index, currentValue);
};

names.forEach(printIndex);