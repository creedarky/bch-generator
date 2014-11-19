'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var BchGeneratorGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the magnificent BchGenerator generator!'
    ));

    /*
    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
    */
    done();
  },

  writing: {
    app: function () {

      this.directory('src', 'src');
      this.src.copy('bowerrc', '.bowerrc');
      this.src.copy('gitignore', '.gitignore');
      this.src.copy('travis.yml', '.travis.yml');
      this.src.copy('_package.json', 'package.json');
      this.src.copy('_Gruntfile.js', 'Gruntfile.js');
      this.src.copy('_package.json', 'package.json');
      this.src.copy('_module.prefix', 'module.prefix');
      this.src.copy('_module.suffix', 'module.suffix');
      this.src.copy('_proxy.js', 'proxy.js');
      this.src.copy('_README.md', 'README.md');
      this.src.copy('_bower.json', 'bower.json');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = BchGeneratorGenerator;
