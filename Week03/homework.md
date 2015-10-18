###Week 3 Homework - Due 10/19/15 at 11:59pm

Create a Node.js Command Line App that interacts with the Numbers API to make requests and receive responses in **JSON**.  Your app should have a cli.js, app.js and a package.json and optionally a node_modules folder.<br/>

http://numbersapi.com/

#####Guidelines

 1. Implement a help option. <br/>
`node clis.js --help`

 2. Implement the command that allows you to get a Math Fact and prints it to the terminal. <br/>
    `node cli.js --math 1729` <br />
    `math: 1729 is the smallest natural number representable in two different ways as a sum of two positive cubes, as Ramanujan stated on the spot.`

 3. Implement the command that allows you to get a Trvia Fact and prints it to the terminal.<br/>
`node cli.js --trivia 35000` <br/>
`trivia: 35000 is the number of genes in a human being.`

 4. Implement tthe command that allows you to get a Date Fact or Year Fact depending on how the argument passed (01/30 versus 2010) and prints it to the terminal.<br/>
 `node cli.js --date 01/30 // returns date fact` <br/>
 `date: January 31st is the day in 1990 that the first McDonald's in the Soviet Union opens in Moscow.` <br/>

 `node cli.js --date 1501  // returns year fact`<br/>
 `year: 1501 is the year that Michelangelo returns to his native Florence to begin work on the statue David.`

 5. The app should allow a user to save the facts as a .json file by passing a save flag. The save flag is optional and should be compatible with the above commands.

- The saved entry should appended the date it was saved to the fact object.
- The saved file should be valid JSON.

*IF the file is not created then the save flag will create the file and save the fact.
    
*IF the file already exists it will add the fact to JSON inside the file. All other facts inside the file will still be present.
    
    node cli.js --trivia 35000 --save

    facts.json
    [
      {
        "text": "35000 is the number of genes in a human being.",
        "number": 35000,
        "found": true,
        "type": "trivia",
        "saved": "Fri Oct 09 2015 17:53:04 GMT-0700 (PDT)"
      },
      {
        "text": "1501 is the year that Michelangelo returns to his native Florence to begin work on the statue David.",
        "number": 1501,
        "found": true,
        "type": "year",
        "saved": "Sun Oct 11 2015 15:25:19 GMT-0700 (PDT)"
      }
    ]


