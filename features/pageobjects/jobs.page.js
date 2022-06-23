import StatePage from '../pageobjects/state.page'

class JobsPage{
    //WebElement Locators
    get searchForProf(){ return $("//*[@id='react-select-2-placeholder']/span") }
    get searchInput(){ return $("//*[@id='react-select-2-input']") }
    get firstEleOfProfDD(){ return $("//*[@id='react-select-2-listbox']") }
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
}
export default new JobsPage();