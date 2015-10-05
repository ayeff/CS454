function foo(defaultAValue){
	if (defaultAValue)
		this.a = defaultAValue;
	else
		this.a = 1;
}


foo();
console.log(a);  // Window now has a property 'a' with a value 1.

a+=10;

var obj1 = new foo(5);
var obj2 = new foo(20);


console.log('window.a =', a);
console.log(obj1.a);
console.log(obj2.a);




