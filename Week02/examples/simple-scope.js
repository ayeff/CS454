function foo(){
	var str = 'bar';
	g = 'global';

	console.log('str =', str);
	console.log('g =', g);
}

foo();

console.log('outside of "foo", g =', g);


// After execution, introduce Immediately-Invoked Function Expression (IIFE)