/* jshint node: true */
'use strict';

var checker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-infinity',

  init: function() {
    if (this._super.init) {
      this._super.init.apply(this, arguments);
    }
    checker.assertAbove(this, '0.2.0');
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.addons.forEach(function(addon){
      if (addon.name === 'ember-version-is') {
        addon.included.apply(addon, [app]);
      }
    });
  }
};
