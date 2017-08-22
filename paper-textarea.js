import '../polymer/polymer.js';
import '../iron-autogrow-textarea/iron-autogrow-textarea.js';
import { IronFormElementBehavior } from '../iron-form-element-behavior/iron-form-element-behavior.js';
import { PaperInputBehavior } from './paper-input-behavior.js';
import './paper-input-char-counter.js';
import './paper-input-container.js';
import './paper-input-error.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float\$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate\$="[[autoValidate]]" disabled\$="[[disabled]]" invalid="[[invalid]]">

      <label hidden\$="[[!label]]" aria-hidden="true" for="input" slot="label">[[label]]</label>

      <iron-autogrow-textarea id="input" class="paper-input-input" slot="input" aria-labelledby\$="[[_ariaLabelledBy]]" aria-describedby\$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator\$="[[validator]]" disabled\$="[[disabled]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" name\$="[[name]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" required\$="[[required]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]" autocapitalize\$="[[autocapitalize]]" rows\$="[[rows]]" max-rows\$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,

  is: 'paper-textarea',

  behaviors: [
    PaperInputBehavior,
    IronFormElementBehavior
  ],

  properties: {
    _ariaLabelledBy: {
      observer: '_ariaLabelledByChanged',
      type: String
    },

    _ariaDescribedBy: {
      observer: '_ariaDescribedByChanged',
      type: String
    },

    /**
     * The initial number of rows.
     *
     * @attribute rows
     * @type number
     * @default 1
     */
    rows: {
      type: Number,
      value: 1
    },

    /**
     * The maximum number of rows this element can grow to until it
     * scrolls. 0 means no maximum.
     *
     * @attribute maxRows
     * @type number
     * @default 0
     */
    maxRows: {
     type: Number,
     value: 0
    }
  },

  _ariaLabelledByChanged: function(ariaLabelledBy) {
    this.$.input.textarea.setAttribute('aria-labelledby', ariaLabelledBy);
  },

  _ariaDescribedByChanged: function(ariaDescribedBy) {
    this.$.input.textarea.setAttribute('aria-describedby', ariaDescribedBy);
  },

  get _focusableElement() {
    return this.$.input.textarea;
  }
});
