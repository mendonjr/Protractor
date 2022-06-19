import {Given, Then, When} from 'cucumber'
import { browser } from "protractor";
import { angular } from '../pageObjects/angularweb';
import { calculator } from "../pageObjects/calculator";
import chai from "chai";
import { assert } from 'console';
let calc = new calculator()
let ah = new angular()
var expect = chai.expect()

  Given('I will launch calculator website', async() =>{
    // Write code here that turns the phrase above into concrete actions
    await browser.get('https://juliemr.github.io/protractor-demo/');
  });

  When('I add two numbers {string} and {string}', async (string, string2)=> {
  


       
        await calc.firstEditbox.sendKeys(string)
        await calc.secondEditbox.sendKeys(string2)

        //await element(by.model("second")).sendKeys("4")

        //await element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click()  
        await calc.go.click().then(function () {

            browser.sleep(4000);
        })
  })
  When('I click on link of header', async ()=> {
    await ah.angularlink.click();
    

  })
  Then('The output displayed must be eight', async (dataTable)=> {
    await calc.go.click().then(function () {

      browser.sleep(4000);
  })
    await calc.getResult.getText().then(function (text) {
    //  expect(text).to.equal("8");
      assert(text=="9")
  })
  })
  
  Then('The output displayed must be {string}', async(string)=> {
    await calc.go.click().then(function () {

      browser.sleep(4000);
  })
    await calc.getResult.getText().then(function (text) {
      expect(text).to.equal(string);
  })
})
  Given('I will launch {string} website', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
   if(string=="calculator")
   {
     await browser.get('https://juliemr.github.io/protractor-demo/');
   }
   else if(string=="Angular")
   {
     await  browser.get('https://angularjs.org/')
   }
  })
  
  When('User will navigate to header page', async ()=> {
    
   console.log("Navigated to angular.io page")

  })
  Then('USer will send {string} to search box', async (string)=> {
    await browser.sleep(4000)
    await ah.search.sendKeys(string);

  });
  
  



