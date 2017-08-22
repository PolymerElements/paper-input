import '../../polymer/polymer.js';
import { IronValidatorBehavior } from '../../iron-validator-behavior/iron-validator-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  is: 'ssn-validator',

  behaviors: [
    IronValidatorBehavior
  ],

  validate: function(value) {
    // this regex validates incomplete ssn's (by design)
    return !value || value.match(/^[0-9]{0,3}-[0-9]{0,2}-[0-9]{0,4}$/);
  }
});
