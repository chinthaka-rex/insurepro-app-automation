class LandingPage{
    //WebElement Locators
    get languageLink(){
        return $('#footer > div > div > button*=Continuar en español');
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
        const link = await $('//*[@id="footer"]/div/div/button')
        console.log(await link.getText(),"-----------------------")
    }
}
export default new LandingPage();