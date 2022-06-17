import { Given,When,Then } from "@wdio/cucumber-framework";
import LandingPage from '../pageobjects/landing.page'

var expPageTitle;

Given(/^user is on insurepro landing page$/, async () => {
    LandingPage.openLandingPage();
});

When(/^user gets the title of the insurepro landing page$/, async () => {
    expPageTitle = await LandingPage.getPageTitle();
});

When(/^insurepro landing page title should be \"([^\"]*)\"$/, async (insurepro) => {
    expect(insurepro).toEqual(expPageTitle);
});

When(/^insurepro landing page should contain \"([^\"]*)\" link$/, async (continuarenespaol) => {
    //await expect(LandingPage.languageLink).toBePresent();
    //console.log("YYY : ",await LandingPage.languageLink).map(elem => elem.getText());
    LandingPage.getLanguageLinkText;
    console.log("yyy : ",continuarenespaol);
});

Then(/^Start to type your Then step here insurepro landing page should contain \"([^\"]*)\" button$/, async (getaquote) => {
    // await expect(LandingPage.quoteButton).toBePresent();
    // await expect(LandingPage.quoteButton).getText();
    console.log("zzz : ",getaquote);
});