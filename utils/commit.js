require('fs');
const path = require('path');
const correctDir = path.join(__dirname, '..');


var cmd = require('node-cmd');
//const syncData=cmd.runSync('cd ./example & dir');

//console.log(`git add ${correctDir}\\src`);


cmd.runSync(`git add ${correctDir}\\src`);

cmd.runSync('git commit -m "Add existing file"');
cmd.runSync('git push origin master');