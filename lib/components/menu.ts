import { Menu as IMenu } from "../component";
import { Component } from "./component";
export { IMenu };

export class Menu extends Component<IMenu> {
  static new(...children): Menu {
    return new Menu({
      type: "menu",
      children: children.map(Component.normalize),
    });
  }
}
