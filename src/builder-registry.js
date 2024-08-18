import { Builder } from "@builder.io/react";
import Button from "./components/Button";
import Counter from "./components/Counter/Counter";
import TextInput from "./components/TextInput";



Builder.registerComponent(Button, {
  name: "Button",
  inputs: [{name: 'className', type: 'text'}, {name: 'onClick', type: 'func'}]
});

Builder.registerComponent(TextInput, {
  name: "TextInput",
});
