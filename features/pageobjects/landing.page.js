class LandingPage{
    //WebElement Locators
    get languageLink(){ return $("//*[@id='footer']/div/div/button") }
    get quoteButton(){ return $("//*[@id='footer']/div/button") }

    //Actions
    async openLandingPage(){
            await browser.url("https://app-new-flow.qa.insurepro.com/");
    }

    async getPageTitle(){
        const pTitle = await browser.getTitle();
        console.log("The page title is : ",pTitle);
        return pTitle;
    }

    async getLanguageLinkText(){
        const text = this.languageLink;
        let txt = text.getText();
        return txt;
    }

    async getQuoteButtonText(){
        const text = this.quoteButton;
        let txt = text.getText();
        return txt;
    }

    async clickOnTheQuoteBtn(){
        await this.quoteButton.click();
    }

    async loadStatePage(){
        await this.openLandingPage();
        await this.clickOnTheQuoteBtn();
    }
}
export default new LandingPage();