"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const angularweb_1 = require("../pageObjects/angularweb");
const calculator_1 = require("../pageObjects/calculator");
const chai_1 = __importDefault(require("chai"));
const console_1 = require("console");
let calc = new calculator_1.calculator();
let ah = new angularweb_1.angular();
var expect = chai_1.default.expect();
cucumber_1.Given('I will launch calculator website', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditbox.sendKeys(string);
    yield calc.secondEditbox.sendKeys(string2);
    //await element(by.model("second")).sendKeys("4")
    //await element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click()  
    yield calc.go.click().then(function () {
        protractor_1.browser.sleep(4000);
    });
}));
cucumber_1.When('I click on link of header', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ah.angularlink.click();
}));
cucumber_1.Then('The output displayed must be eight', (dataTable) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.go.click().then(function () {
        protractor_1.browser.sleep(4000);
    });
    yield calc.getResult.getText().then(function (text) {
        //  expect(text).to.equal("8");
        console_1.assert(text == "9");
    });
}));
cucumber_1.Then('The output displayed must be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.go.click().then(function () {
        protractor_1.browser.sleep(4000);
    });
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
cucumber_1.Given('I will launch {string} website', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calculator") {
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    }
    else if (string == "Angular") {
        yield protractor_1.browser.get('https://angularjs.org/');
    }
}));
cucumber_1.When('User will navigate to header page', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Navigated to angular.io page");
}));
cucumber_1.Then('USer will send {string} to search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(4000);
    yield ah.search.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMEM7QUFDMUMsMkNBQXFDO0FBQ3JDLDBEQUFvRDtBQUNwRCwwREFBdUQ7QUFDdkQsZ0RBQXdCO0FBQ3hCLHFDQUFpQztBQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtBQUMzQixJQUFJLEVBQUUsR0FBRyxJQUFJLG9CQUFPLEVBQUUsQ0FBQTtBQUN0QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFeEIsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxHQUFRLEVBQUU7SUFDbEQsb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBS25FLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUUxQyxpREFBaUQ7SUFFakQsaUdBQWlHO0lBQ2pHLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFFdkIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUE7QUFDUixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ0YsZUFBSSxDQUFDLDJCQUEyQixFQUFFLEdBQVEsRUFBRTtJQUMxQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFHL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNGLGVBQUksQ0FBQyxvQ0FBb0MsRUFBRSxDQUFPLFNBQVMsRUFBQyxFQUFFO0lBQzVELE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFFekIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDQSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUNsRCwrQkFBK0I7UUFDN0IsZ0JBQU0sQ0FBQyxJQUFJLElBQUUsR0FBRyxDQUFDLENBQUE7SUFDckIsQ0FBQyxDQUFDLENBQUE7QUFDRixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDM0QsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztRQUV6QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNBLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNBLGdCQUFLLENBQUMsZ0NBQWdDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUN0RCxvRUFBb0U7SUFDckUsSUFBRyxNQUFNLElBQUUsWUFBWSxFQUN2QjtRQUNFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztLQUNqRTtTQUNJLElBQUcsTUFBTSxJQUFFLFNBQVMsRUFDekI7UUFDRSxNQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7S0FDN0M7QUFDRixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsZUFBSSxDQUFDLG1DQUFtQyxFQUFFLEdBQVEsRUFBRTtJQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7QUFFNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNGLGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzVELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDekIsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVuQyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=