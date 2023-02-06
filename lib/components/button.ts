import { Icon } from "..";
import {
  Button as IButton,
  Icon as IIcon,
  Style as IStyle,
  Size as ISize,
} from "../component";
import { Component } from "./component";


function Button(text: string) {
  return new ButtonImpl(text);
}

class ButtonImpl extends Component<IButton> {
  disabled(disabled: boolean) {
    this.model.disabled = disabled;
    return this;
  }
  disable() {
    this.model.disabled = true;
    return this;
  }
  enable() {
    this.model.disabled = false;
    return this;
  }
  submit(val: boolean) {
    this.model.submit = val === undefined ? true : val;
    return this;
  }
  leftIcon(icon: Icon | IIcon) {
    this.model.leftIcon = Component.normalize(icon);
    return this;
  }
  rightIcon(icon: Icon | IIcon) {
    this.model.rightIcon = Component.normalize(icon);
    return this;
  }
  mainStyle(style: IStyle) {
    this.model.mainStyle = style;
    return this;
  }
  size(size: ISize) {
    this.model.size = size;
    return this;
  }
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }

  constructor(text: string) {
    super({
      type: "button",
      text: text,
    });
  }
}

export { IButton, Button, ButtonImpl };
