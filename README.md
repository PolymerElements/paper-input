[![Build status](https://travis-ci.org/AqoviaElements/papyrus-input.svg?branch=master)](https://travis-ci.org/AqoviaElements/papyrus-input)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/AqoviaElements/papyrus-input)

##&lt;papyrus-input&gt;

`<papyrus-input>` is a single-line text field with validation and plain styling.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="papyrus-input.html">
    <style>
      papyrus-input {
        max-width: 200px;
        margin: auto;
        font-family: sans-serif;
        font-size: 14px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<papyrus-input 
  label="This input requires letters only" 
  char-counter 
  auto-validate 
  pattern="[a-zA-Z]*" 
  error-message="Please enter letters only!">
</papyrus-input>
```
