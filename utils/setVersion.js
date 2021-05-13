const fileName = 'package.json';
const fileReadmefileReadmeName = 'README.md';
let mode = process.argv[2] ? process.argv[2] : 'none';
let clc = require('cli-color');
let fs = require('fs');
const path = require('path');
const correctDir = path.join(__dirname, '..');
const file = path.join(correctDir, '') + '/' + fileName;
const fileReadmefileReadme = path.join(correctDir, '') + '/' + fileReadmefileReadmeName;
let data = '' + fs.readFileSync(file, 'utf8');
let cSubVersion = ('' + data).match('\"version(.*?)\.(.*?)"\,');
let _cSubVersion = cSubVersion[cSubVersion.length - 1];


var m = clc.blackBright;
var b = clc.green.bold;
var h = clc.white;
var y = clc.yellow.bold;
var h1_ = clc.blue;
var h1 = (d) => {
  let l = '##############################################';
  if (d === '') {
    d = l;
  }
  let _d = d.replace(/|\[]/ig, '@');
  _d = _d.replace(/\[/ig, '@');
  _d = _d.replace(/@@.*?[ |m]/gi, '');

  while (_d.length < l.length) {
    d += ' ';
    _d += ' ';
  }
  return m('###   ') + clc.blue(d) + m('   ###');
};
let g;
console.clear();

console.log(h1(`CHANGE VERSION IN ${b(fileName)} ##############`));
let oldValue;
let newValue;
newValue = oldValue = _cSubVersion.split('\"')[1];

if (mode === 'none' || mode === '0') {
  console.log(h1(`Mode: ${b(mode)} ${h1_('-')} ${h('will do nothing...')}`));
  console.log(h1(`From: ${b(oldValue)};  ->  To: ${b(newValue)};`));
  mode = '-1';
}


if (mode === 'changes' || mode === '3') {
  g = ((cSubVersion[cSubVersion.length - 1]) + '').split('.');
  g[0] = g[0].substr(3);
  _cSubVersion = +g[2];
  newValue = y(Number(_cSubVersion) + 1);

  data = data.replace(new RegExp('\"version\": \"(.*?)\.(.*?)\.(.*?)"\,', 'g'),
    `"version": "${g[0]}.${g[1]}.${++g[2]}",`);
  let l = oldValue.split('.');
  l = l[l.length];

  console.log(h1(`Mode: ${b(mode)} ${('-')} ${h('Update version x.x.' + y('x'))}`));
  console.log(h1(`From: ${g[0]}.${g[1]}.${y(g[2])};  ->  To: ${g[0]}.${g[1]}.${newValue};`));
  newValue = `${g[0]}.${g[1]}.${newValue}`;

}
if (mode === 'update' || mode === '2') {
  g = ((cSubVersion[cSubVersion.length - 1]) + '').split('.');
  g[0] = g[0].substr(3);
  _cSubVersion = +g[1];
  newValue = y(Number(_cSubVersion) + 1);

  data = data.replace(new RegExp('\"version\": \"(.*?)\.(.*?)\.(.*?)"\,', 'g'),
    `"version": "${g[0]}.${++g[1]}.${g[2]}",`);
  let l = oldValue.split('.');
  l = l[l.length];

  console.log(h1(`Mode: ${b(mode)} ${('-')} ${h('Update version x.' + y('x') + '.x')}`));
  console.log(h1(`From: ${g[0]}.${y(g[1])}.${g[2]};  ->  To: ${g[0]}.${newValue}.${g[2]};`));
  newValue = `${g[0]}.${g[1]}.${newValue}`;
}
if (mode === 'refactor' || mode === '1') {
  g = ((cSubVersion[cSubVersion.length - 1]) + '').split('.');
  g[0] = g[0].substr(3);
  _cSubVersion = +g[0];
  newValue = y(Number(_cSubVersion) + 1);

  data = data.replace(new RegExp('\"version\": \"(.*?)\.(.*?)\.(.*?)"\,', 'g'),
    `"version": "${++g[0]}.${g[1]}.${g[2]}",`);
  let l = oldValue.split('.');
  l = l[l.length];

  console.log(h1(`Mode: ${b(mode)} ${('-')} ${h('Update version ' + y('x') + '.x.x')}`));
  console.log(h1(`From: ${y(g[0])}.${g[1]}.${g[2]};  ->  To: ${newValue}.${g[1]}.${g[2]};`));
  newValue = `${g[0]}.${g[1]}.${newValue}`;
}
if (mode !== '-1') {
console.log(h1(``));


fs.writeFile(file, data, error => {
  if (error) {
    console.error(`${nextLine}${nextLine}Failure building directory tree:  error ${nextLine}${nextLine}`);
  }
});

  if (g) {
    let data1 = '' + fs.readFileSync(fileReadmefileReadme, 'utf8');
    data1 = data1.replace(RegExp('Version:(.*?)>', ''), `Version: ${g[0]}.${g[1]}.${g[2]}<br>`);
    fs.writeFile(fileReadmefileReadme, data1, error => {
      if (error) {
        console.error(`${nextLine}${nextLine}Failure building directory tree:  error ${nextLine}${nextLine}`);
      }
    });
  }
}