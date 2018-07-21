var shell = require("shelljs");
var readline = require('readline');
var argv = require('yargs').argv;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
var execArr = [];
var cmd = argv._.join("_");
function cmd(n) {
    rl.on('line', function (line) {
        execArr.push(line);
        if (execArr.length == n) {
            var file = execArr.join(" ");
            console.log('file:', file);
            exec(cmd, file)
        }
    });
}

function exec(cmd, file) {
    shell.exec(cmd + " " + file);
}

exports.cmd = cmd;