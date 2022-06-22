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
    expect(expPageTitle).toEqual(insurepro);
});

When(/^insurepro landing page should contain \"([^\"]*)\" link$/, async (continuarenespaol) => {
    expect(await LandingPage.getLanguageLinkText()).toEqual(continuarenespaol);
});

Then(/^Start to type your Then step here insurepro landing page should contain \"([^\"]*)\" button$/, async (getaquote) => {
    expect(await LandingPage.getQuoteButtonText()).toEqual(getaquote);
});

When(/^click on the Get A Quote button$/, async () => {
    await LandingPage.clickOnTheQuoteBtn();
});

Then(/^user should navigate to the next page and title should be \"([^\"]*)\"$/, async (state) => {
    expect(await LandingPage.getPageTitle()).toEqual(state);
});
