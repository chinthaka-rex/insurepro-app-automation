import { Given,When,Then } from "@wdio/cucumber-framework";
import StatePage from '../pageobjects/state.page'

var expPageTitle;

Given(/^user is on insurepro state page$/, async () => {
    await StatePage.openStatePage();
});

Then(/^user gets the title of the insurepro state page$/, async () => {
    expPageTitle = await StatePage.getPageTitle();
});

When(/^insurepro state page title should be \"([^\"]*)\"$/, async (state) => {
    expect(expPageTitle).toEqual(state);
});

When(/^insurepro state page should contain \"([^\"]*)\" dropdown$/, async (searchforstate) => {
    expect(await StatePage.getSearchForStateText()).toEqual(searchforstate);
});

When(/^insurepro state page should contain \"([^\"]*)\" button$/, async (conBtn) => {
    expect(await StatePage.getConBtnText()).toEqual(conBtn);
});

Then(/^select \"([^\"]*)\" as the state$/, async (stateName) => {
    await StatePage.selectState(stateName);
});

When(/^click on the Continue button on the insurepro state page$/, async () => {
    await StatePage.clickOnTheConBtn();
});

Then(/^user should navigate from state page to the next page and title should be \"([^\"]*)\"$/, async (jobPageName) => {
    expect(await StatePage.getPageTitle()).toEqual(jobPageName);
});