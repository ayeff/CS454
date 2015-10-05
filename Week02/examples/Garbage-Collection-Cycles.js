function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o references o2
  o2.a = o; // o2 references o

  return "azerty";
}

f();

// Reference counting algorithms would fail here, even after 
// the function f() in which o and o2 are declared, is done executing