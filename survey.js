const readline = require('readline');

const answers = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
  answers.name = answer;

  rl.question(`What's an activity you like doing?`, (answer) => {
    answers.activity = answer;
  
    rl.question(`What do you listen to while doing that?`, (answer) => {
      answers.listen = answer;

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
        answers.favouriteMeal = answer;
  
        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          answers.favouriteMealItem = answer;
    
          rl.question(`Which sport is your absolute favourite?`, (answer) => {
            answers.favouriteSport = answer;
      
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
              answers.superpower = answer;
        
              console.log(`\n\n${answers.name} loves listening to ${answers.listen} while ${answers.activity}, devouring ${answers.favouriteMealItem} for ${answers.favouriteMeal}, prefers ${answers.favouriteSport} over any other sport, and is amazing at ${answers.superpower}.\n\n`);
    
              rl.close();
            });
          });
        });
      });
    });
  });
});