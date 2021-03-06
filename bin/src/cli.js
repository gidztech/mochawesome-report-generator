#!/usr/bin/env node
const yargs = require('yargs');
const options = require('../lib/options');
const marge = require('./cli-main');

// Setup yargs
yargs
  .usage('Usage: $0 [options] data_file [data_file2 ...]')
  .demand(1)
  .options(options.getYargsOptions())
  .help('help')
  .alias('h', 'help')
  .version()
  .epilog('Copyright 2016-2017 Adam Gruber')
  .argv;

// Call the main cli program
marge(yargs.argv);
