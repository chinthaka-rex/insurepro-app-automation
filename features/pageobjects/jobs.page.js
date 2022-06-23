import StatePage from '../pageobjects/state.page'

class JobsPage{
    //WebElement Locators
    get searchForProf(){ return $("//*[@id='react-select-3-placeholder']/span") }
    get searchInput(){ return $("//*[@id='react-select-3-input']") }
    get firstEleOfProfDD(){ return $("//*[@id='react-select-3-listbox']") }
    get conBtn(){ return $("//*[@id='footer']/div/button") }

    //Actions
    async openJobsPage(){
       await StatePage.loadJobsPage()
    }  

    async getPageTitle(){
        const pTitle = await browser.getTitle();
        console.log("The page title is : ",pTitle);
        return pTitle;
    }

    async getSearchForProfText(){
        const text = this.searchForProf;
        let txt = text.getText();
        return txt;
    }

    async getConBtnText(){
        const text = this.conBtn;
        let txt = text.getText();
        return txt;
    }

    async selectJob(jName){
        await this.searchInput.setValue(jName)
        await this.firstEleOfProfDD.click();
    }

    async clickOnTheConBtn(){
        await this.conBtn.click();
    }

    async loadWLIPage(){
        await StatePage.loadJobsPage()
        await browser.pause(300)
        await this.selectJob('House Cleaning')
        await this.clickOnTheConBtn()
     }
}
export default new JobsPage();