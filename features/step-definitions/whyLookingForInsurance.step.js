import { Given,When,Then } from "@wdio/cucumber-framework";
import WAYLFIPage from '../pageobjects/whyLookingForInsurance.page'

var expPageTitle;

Given(/^user is on insurepro why are you looking for insurance page$/, async () => {
    await WAYLFIPage.openWAYLFIPage();
});

Then(/^user gets the title of the insurepro why are you looking for insurance page$/, async () => {
    expPageTitle = await WAYLFIPage.getPageTitle();
});

When(/^insurepro insurepro why are you looking for insurance page title should be \"([^\"]*)\"$/, async (expTitle) => {
    expect(expPageTitle).toEqual(expTitle);
});

When(/^insurepro flow 3 why are you looking for insurance page should contain \"([^\"]*)\" button$/, async (expBtnOneTitle) => {
    expect(await WAYLFIPage.getBtnOneText()).toEqual(expBtnOneTitle);
});

When(/^insurepro flow 2 why are you looking for insurance page should contain \"([^\"]*)\" button$/, async (expBtnTwoTitle) => {
    expect(await WAYLFIPage.getBtnTwoText()).toEqual(expBtnTwoTitle);
});

When(/^insurepro flow 1 why are you looking for insurance page should contain \"([^\"]*)\" button$/, async (expBtnThreeTitle) => {
    expect(await WAYLFIPage.getBtnThreeText()).toEqual(expBtnThreeTitle);
});

When(/^insurepro why are you looking for insurance page should contain \"([^\"]*)\" button$/, async (expBtnFourTitle) => {
    expect(await WAYLFIPage.getConBtnText()).toEqual(expBtnFourTitle);
});

When(/^user selects the \"([^\"]*)\" flow$/, async (buttonForClick) => {
    await WAYLFIPage.selectTheFlow
});

Then(/^click on the Continue button on the insurepro state page$/, async () => {
    
});

When(/^user should navigate from state page to the next page and title should be \"([^\"]*)\"$/, async (expNxtPgTitle) => {
    
});