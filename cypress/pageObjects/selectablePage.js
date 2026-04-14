import {BasePage} from "./basePage";

export class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get gridTab() {
    return cy.get("#demo-tab-grid");
  }

  static gridItem(itemName) {
    return cy.contains(".grid-container li", itemName);
  }

  static isActive(itemName) {
    return this.gridItem(itemName);
  }
}