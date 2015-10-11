###Week 3 Homework - Due 10/19/15 at 11:59pm

Create a Node.js Command Line App that interacts with the Numbers API.  Your app should have a cli.js, app.js and a package.json.
http://numbersapi.com/

#####Guidelines

[0] Implment a help option.

[1] Implment the command that allows you to get a Math Fact
    node cli.js --math 1729

[2] Implment the command that allows you to get a Trvia Fact.
    node cli.js --trivia 35000

[3] Implment the command that allows you to get a Date Fact or Year Fact depending on how the argument passed (01/30 versus 2010)
    node cli.js --date 01/30 // returns date fact
    node cli.js --date 2012  // returns year fact

[4] The app should allow a user to save the facts as a .json file by passing a save flag. The save flag should be compatible with the above commands.
    
    a. The saved entry should appended the date it was saved to the fact object.
    b. The saved file should be valid JSON.

    *IF the file is not created yet then the save flag will create the file and save the fact.
    
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
      }
    ]


