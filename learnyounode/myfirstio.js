var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var arrayOfLines = str.split('\n');
console.log(arrayOfLines.length - 1); 
/* NOTE: there is one less '\n' than the number of
   lines since the test file does not have 
   a '\n' at the end
*/

