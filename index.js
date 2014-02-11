// # Ghost bootloader
// Orchestrates the loading of Ghost
// When run from command line.

require('newrelic');
var ghost = require('./core');

ghost();
