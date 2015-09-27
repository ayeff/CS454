// TYPE CONVERSION
console.log(8 * null);
console.log('5' - 1);
console.log('5' + 1);
console.log('five' * 2);

// EQUALITY
console.log('2' == 2);
console.log(false == 0);

// STRICT EQUALITY
console.log('2' === 2);
console.log(false === 0);

// GOTCHAS
console.log(null === undefined);
console.log(null == false);

var n;
console.log(n);
if (!n) {
  console.log('n is undefined')
} else {
  console.log('my value is: ' + n)
}

// FUNCTIONS
function addThree(arg) {
  return arg + 3;
}

var addTwo =  function (arg) {
  return arg + 2;
};
// console.log(addThree(10));
// console.log(addTwo(10));

// FizzBuzz
// Write a function that prints "Fizz" for numbers divisible by 3,instead of the number
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// For numbers that are divisible by both 3 and 5 
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

function fizzBuzz() {

  for (var i = 1; i <=21; i++) {
    if(i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

// OBJECTS
var robot = {
    name: 'Optimus Prime',
    team: 'Autobot',
    colors: ['red', 'blue', 'white'],
    homeWorld: 'Cybertron'
};

for (var key in robot) {
  console.log(key, robot[key]);
}

// ARRAYS
function findlargest(arr) {
  var largest = 0;

  for ( var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

var max = findlargest([7, 6, 2, 96, 32, 6, 79, 34]);
console.log(max);















