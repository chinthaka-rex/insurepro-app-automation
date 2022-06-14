import { expect } from "chai";

class LandingPage{
    //WebElement Locators
    get languageLink(){
        return $("//*[@id=\"footer\"]/div/div/button");
    }

    get quoteButton(){
        return $("//*[@id=\"footer\"]/div/button");
    }

    //Actions
    openLandingPage(){
        browser.url("https://app-new-flow.qa.insurepro.com/");
        console.log("Navigating to the InsurePro Landing page.")
    }

    async getPageTitle(){
        const pTitle = await browser.getTitle();
        console.log("The page title is : ",pTitle);
    }

}
export default new LandingPage();