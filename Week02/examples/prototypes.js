function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

var p1 = new person('John', 'Doe', 22, 'blue');
var p2 = new person('Mary', 'Doe', 22, 'blue');
p2.getAge = function(){ return this.age };



console.log(p1);
console.log(p1.name());
console.log(p1.getAge());

console.log(p2);
console.log(p2.name());
console.log(p2.getAge());


