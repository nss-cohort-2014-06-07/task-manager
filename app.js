var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var play = [], home = [], school = [];

var option = prompt('(p)lay, (h)ome, (s)chool or (q)uit: ');

while(option != 'q'){
  var task = prompt('Task: ');

  switch(option){
    case 'p':
      play.push(task);
      break;
    case 'h':
      home.push(task);
      break;
    case 's':
      school.push(task);
  }

  option = prompt('(p)lay, (h)ome, (s)chool or (q)uit: ');
}

console.log(chalk.blue( 'Play Tasks:  ', play));
console.log(chalk.red(  'Home Tasks:  ', home));
console.log(chalk.green('School Tasks:', school));

