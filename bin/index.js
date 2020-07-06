#!/usr/bin/env node --harmony

'use strict'

// 定义脚手架的文件路径

const program = require('commander');
var process = require('child_process');

process.env.NODE_PATH = __dirname + '/../node_modules/'

// 定义当前版本
program.version('1.0.0', '-v, --version')
    .command('init <name>')
    .action((name) => {
        console.log('clone template ...');
        process1.exec('git clone https://github.com/goat-0115/du-cli.git', function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                return;
            }
            console.log(stdout);
            console.log('clone success');
        });
    });
program.parse(process.argv);


// 定义使用方法

program

    .usage('<command>')

program

    .command('add')

    .description('Add a new template')

    .alias('a')

    .action(() => {

        require('../command/add')()

    })



program

    .command('list')

    .description('List all the templates')

    .alias('l')

    .action(() => {

        require('../command/list')()

    })



program

    .command('init')

    .description('Generate a new project')

    .alias('i')

    .action(() => {

        require('../command/init')()

    })



program

    .command('delete')

    .description('Delete a template')

    .alias('d')

    .action(() => {

        require('../command/delete')()

    })

program.parse(process.argv)



if (!program.args.length) {

    program.help()

}