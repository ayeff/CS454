### Week 1 Homework - Due 10/05/15 at 11:59pm

##### 1. Write a function that determines if a word is a palindrome  **Do not use Array.reverse().

    isPalindrome('kayak'); // true
    isPalindrome('cook');  // false
 

##### 2.  Write a function that takes a string and replace repeated characters

    replaceLetters("parallel"); // para**el
    replaceLetters("muhaaa"); // muh***


##### 3. Write a function that finds the letter which occurs the most

    repeatingLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']); 
    // value: y, occurances: 4  
    // OR
    // { z: 2, y: 4, x: 2, w: 1, u: 1 }


##### 4.  Write a function that shuffles an array.  The results should be random. HINT: Use Math Object - Math.floor(), Math.Random()

    shuffleArray([1, 2, 3, 4, 5]); // [3, 5, 1, 2, 4]
    

##### 5.  Write a function that takes two numbers and a math operator (+, -, *, /) and performs the calculation.

    calculate(2, 8, '-'); // 2 - 8 = -6
    calculate(2, 8, '+'); // 2 + 8 = 10
    calculate(2, 8, '*'); // 2 * 8 = 16
    calculate(2, 8, '/'); // 2 / 8 = 0.25

##### 6. Write a function that sums all the numbers (string value numbers too) in an array with mixed types

    sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7]); // 21


##### 7.  Write a function that takes a grocery array and tax amount as a percent. This function should calculate the total paid by applying the tax to each grocery item. HINT: use .toFixed() to force decimals to 2 places.

    var groceries = [
      { name: 'Orange Juice', price: 2.00 },
      { name: 'Milk', price: 3.50 },
      { name: 'Cereal', price: 2.00 },
      { name: 'Sugar', price: 1.75 }
    ];
    totalPaid(groceries, 9.5);

    //
    { total: '10.13',
      groceries:
       [ { name: 'Orange Juice', paid: '2.19' },
         { name: 'Milk', paid: '3.83' },
         { name: 'Cereal', paid: '2.19' },
         { name: 'Sugar', paid: '1.92' } ] }

         


