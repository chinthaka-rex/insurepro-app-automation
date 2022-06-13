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
        browser.url("https://app-new-flow.qa.insurepro.com");
        console.log("Navigating to the InsurePro Landing page.")

        const pTitle = browser.getTitle();
    }

    verifyPageHeading = async() => {
        
    }
}
export default new LandingPage();