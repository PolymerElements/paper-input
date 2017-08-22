import '../polymer/polymer.js';
import '../paper-styles/typography.js';
import { PaperInputAddonBehavior } from './paper-input-addon-behavior.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host-context([dir="rtl"]) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,

  is: 'paper-input-char-counter',

  behaviors: [
    PaperInputAddonBehavior
  ],

  properties: {
    _charCounterStr: {
      type: String,
      value: '0'
    }
  },

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function(state) {
    if (!state.inputElement) {
      return;
    }

    state.value = state.value || '';

    var counter = state.value.toString().length.toString();

    if (state.inputElement.hasAttribute('maxlength')) {
      counter += '/' + state.inputElement.getAttribute('maxlength');
    }

    this._charCounterStr = counter;
  }
});
