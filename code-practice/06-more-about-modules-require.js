 // use folder name instead of file like "index.js"
 const greet = require('./greeting');
 const language = require('./greeting/language.json');

 greet.english(language.english);
 greet.hindi(language.hindi);
 greet.marathi(language.marathi);