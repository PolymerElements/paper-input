# paper-input

`<paper-input>` is a Material Design text field.

Contains a number of different features for validation, character counting, and more.

# using with AngularJS

`paper-input` element is using `paper-input-container` as it's base element. AngularJS uses `ng-model` directive to bind values to `input` control. To work with this, you will have to use `paper-input-container` like this as documented [here](https://elements.polymer-project.org/elements/paper-input?active=paper-input-container):

    <paper-input-container>
      <label>Test input</label>
      <input is="iron-input" ng-model="test_input"></input>
    </paper-input-container>
