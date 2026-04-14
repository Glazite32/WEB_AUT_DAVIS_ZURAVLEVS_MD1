import { SelectablePage } from "../pageObjects/selectablePage";
import { BasePage } from "../pageObjects/basePage";

describe("DemoQA Selectable Grid", () => {
  context('MD1 - Davis Zuravlevs', () => {
    beforeEach(() => {
      SelectablePage.visit();
    });
  
    it("selects Two, Four, Six, Eight and validates selected/non-selected items", () => {

    SelectablePage.gridTab.click();

    SelectablePage.gridItem("Two").click();
    SelectablePage.gridItem("Four").click();
    SelectablePage.gridItem("Six").click();
    SelectablePage.gridItem("Eight").click();


    SelectablePage.isActive("Two").should("have.class", "active");
    SelectablePage.isActive("Four").should("have.class", "active");
    SelectablePage.isActive("Six").should("have.class", "active");
    SelectablePage.isActive("Eight").should("have.class", "active");

    SelectablePage.isActive("One").should("not.have.class", "active");
    SelectablePage.isActive("Three").should("not.have.class", "active");
    SelectablePage.isActive("Five").should("not.have.class", "active");
    SelectablePage.isActive("Seven").should("not.have.class", "active");
    SelectablePage.isActive("Nine").should("not.have.class", "active");

 
    });
  });
});