var obj = {
    foo: function(){
        console.log(this === obj);    
    }
};

obj.foo(); // true



// #############

function bar(){
    console.log(typeof this);
}

bar() // window
var obj2 = new bar() // bar
var obj3 = new bar()