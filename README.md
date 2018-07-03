[![Published on NPM](https://img.shields.io/npm/v/@polymer/paper-input.svg)](https://www.npmjs.com/package/@polymer/paper-input)
[![Build status](https://travis-ci.org/PolymerElements/paper-input.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-input)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/paper-input)

## &lt;paper-input&gt;
`<paper-input>` is a single-line text field with Material Design styling.

See: [Documentation](https://www.webcomponents.org/element/PolymerElements/paper-input),
  [Demo](https://www.webcomponents.org/element/PolymerElements/paper-input/demo/demo/index.html).

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-input.html">
    <link rel="import" href="../iron-icons/iron-icons.html">
    <style>
      paper-input {
        max-width: 400px;
        margin: auto;
      }
      iron-icon, div[suffix] {
        color: hsl(0, 0%, 50%);
        margin-right: 12px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

## Usage

### Installation
```
npm install --save @polymer/paper-input
```

### In an html file
```html
<html>
  <head>
    <script type="module" src="node_modules/polymer/paper-input/paper-input.js"></script>
  </head>
  <body>
    <paper-input always-float-label label="Floating label"></paper-input>
  </body>
</html>
```
### In a Polymer 3 element
```js
import '@polymer/paper-input/paper-input.js';
import {PolymerElement, html} from '@polymer/polymer';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <paper-input always-float-label label="Floating label"></paper-input>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```
git clone https://github.com/PolymerElements/paper-input
cd paper-input
```

### Running the demo locally
???

### Running the tests
???

## Changes in 3.0
- ...
- ...
