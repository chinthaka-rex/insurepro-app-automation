import JobsPage from '../pageobjects/jobs.page'

class WAYLFIPage{
    //WebElement Locators
    get forBusinessBtn(){ return $("//*[@id='form']/div[2]/div/label[1]/span/span") }
    get forJobOrProjectBtn(){ return $("//*[@id='form']/div[2]/div/label[2]/span/span") }
    get forSaveBtn(){ return $("//*[@id='form']/div[2]/div/label[3]/span/span") }
    get conBtn(){ return $("//*[@id='footer']/div/button") }

    //Actions
    async openWAYLFIPage(){
       await JobsPage.loadWLIPage()
    }  

    async getPageTitle(){
        const pTitle = await browser.getTitle();
        console.log("The page title is : ",pTitle);
        return pTitle;
    }

    async getBtnOneText(){
        const text = this.forBusinessBtn;
        let txt = text.getText();
        return txt;
    }

    async getBtnTwoText(){
        const text = this.forJobOrProjectBtn;
        let txt = text.getText();
        return txt;
    }

    async getBtnThreeText(){
        const text = this.forSaveBtn;
        let txt = text.getText();
        return txt;
    }

    async getConBtnText(){
        await browser.pause(300)
        const text = this.conBtn;
        let txt = text.getText();
        return txt;
    }
}
export default new WAYLFIPage();