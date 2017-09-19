var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function callback (err, list) {
  if (err)
    console.log(err);
  for (var i = 0; i < list.length; ++i) {
    if (path.extname(list[i]) === ".".concat(process.argv[3]))
      console.log(list[i]);
  }
});
