import '../../polymer/polymer.js';
import { IronValidatorBehavior } from '../../iron-validator-behavior/iron-validator-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({

  is: 'letters-only',

  behaviors: [
    IronValidatorBehavior
  ],

  validate: function(value) {
    return !value || value.match(/^[a-zA-Z]*$/) !== null;
  }

});
