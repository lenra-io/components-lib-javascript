import { describe, expect, test } from "@jest/globals";
import { Button } from "./button";
import { checkComponent } from "./component.test.lib";

test("basic", () => {
  checkComponent(Button("My text"), {
    type: "button",
    text: "My text",
  });
});

test("onPressed", () => {
  const text = "My text";
  checkComponent(Button("My text").onPressed("test"), {
    type: "button",
    text: "My text",
    onPressed: {
      action: "test",
    },
  });
});
