// Excerpted from http://benalman.com/news/2010/11/immediately-invoked-function-expression/

 // Because a function defined like so can be invoked by putting () after
  // the function name, like foo(), and because foo is just a reference to
  // the function expression `function() { /* code */ }`...

  var foo = function(){ /* code */ }

  // ...doesn't it stand to reason that the function expression itself can
  // be invoked, just by putting () after it?

  function(){ /* code */ }(); // SyntaxError: Unexpected token (







  // While this function declaration is now syntactically valid, it's still
  // a statement, and the following set of parens is invalid because the
  // grouping operator needs to contain an expression.

  function foo(){ /* code */ }(); // SyntaxError: Unexpected token )

  // Now, if you put an expression in the parens, no exception is thrown...
  // but the function isn't executed either, because this:

  function foo(){ /* code */ }( 1 );

  // Is really just equivalent to this, a function declaration followed by a
  // completely unrelated expression:

  function foo(){ /* code */ }

  ( 1 );








   // Either of the following two patterns can be used to immediately invoke
  // a function expression, utilizing the function's execution context to
  // create "privacy."

  (function(){ /* code */ }()); // Crockford recommends this one
  (function(){ /* code */ })(); // But this one works just as well

  // Because the point of the parens or coercing operators is to disambiguate
  // between function expressions and function declarations, they can be
  // omitted when the parser already expects an expression (but please see the
  // "important note" below).

  var i = function(){ return 10; }();
  true && function(){ /* code */ }();
  0, function(){ /* code */ }();

  // If you don't care about the return value, or the possibility of making
  // your code slightly harder to read, you can save a byte by just prefixing
  // the function with a unary operator.

  !function(){ /* code */ }();
  ~function(){ /* code */ }();
  -function(){ /* code */ }();
  +function(){ /* code */ }();

  // Here's another variation, from @kuvos - I'm not sure of the performance
  // implications, if any, of using the `new` keyword, but it works.
  // http://twitter.com/kuvos/status/18209252090847232

  new function(){ /* code */ }
  new function(){ /* code */ }() // Only need parens if passing arguments