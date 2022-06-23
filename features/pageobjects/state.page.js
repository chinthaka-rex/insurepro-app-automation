import LandingPage from '../pageobjects/landing.page'

class StatePage{
    //WebElement Locators
    get searchForState(){ return $("//*[@id='react-select-2-placeholder']/span") }
    get searchInput(){ return $("//*[@id='react-select-2-input']") }
    get firstEleOfStateDD(){ return $("//*[@id='react-select-2-listbox']") }
    get conBtn(){ return $("//*[@id='footer']/div/button") }

    //Actions
    async openStatePage(){
       await LandingPage.loadStatePage()
    }  

    async getPageTitle(){
        const pTitle = await browser.getTitle();
        console.log("The page title is : ",pTitle);
        return pTitle;
    }

    async getSearchForStateText(){
        const text = this.searchForState;
        let txt = text.getText();
        return txt;
    }

    async getConBtnText(){
        const text = this.conBtn;
        let txt = text.getText();
        return txt;
    }

    async selectState(sName){
        await this.searchInput.setValue(sName)
        await this.firstEleOfStateDD.click();
    }

    async clickOnTheConBtn(){
        await this.conBtn.click();
    }

    async loadJobsPage(){
       await LandingPage.loadStatePage()
       await browser.pause(300)
       await this.selectState('florida')
       await this.clickOnTheConBtn()
    }
}
export default new StatePage();