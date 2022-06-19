import { by, element, ElementFinder } from "protractor";

export class angular{

    angularlink:ElementFinder
    search:ElementFinder
    
   
   
   
    constructor(){
   
       this.angularlink= element(by.linkText("angular.io"))
       this.search= element(by.css("input[type='search']"))
  
       
   }
}