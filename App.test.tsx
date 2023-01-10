import * as React from "react";
import renderer from "react-test-renderer";

import App from "./App";

it(`renders correctly`, () => {
  const tree = renderer.create(<App />).toJSON();

  if(!tree) {
    throw new Error("Render JSON should be specified");
  }

  console.log(tree);
});
