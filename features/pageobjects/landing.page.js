class LandingPage{
    //WebElement Locators
    get languageLink(){
        return browser.$("//*[@id=\"footer\"]/div/div/button").getText;
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
        return pTitle;
    }

    async getLanguageLinkText(){
        console.log(this.languageLink.getElementText,"----------------------------");
    }
}
export default new LandingPage();