var arr = ['Hello', 'World']
var s1 = arr.join();       // assigns 'Hello,World'   to s1
var s2 = arr.join(', ');   // assigns 'Hello, World'  to s2
var s3 = arr.join(' - ');  // assigns 'Hello - World' to s3
var s4 = arr.join('');     // assigns 'HelloWorld'    to s4

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);