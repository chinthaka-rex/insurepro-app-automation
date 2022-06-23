import { Given,When,Then } from "@wdio/cucumber-framework";
import JobsPage from '../pageobjects/jobs.page'

var expPageTitle;

Given(/^user is on insurepro profession page$/, async () => {
    await JobsPage.openJobsPage()
});

Then(/^user gets the title of the insurepro profession page$/, async () => {
    expPageTitle = await JobsPage.getPageTitle();
});

When(/^insurepro profession page title should be \"([^\"]*)\"$/, async (insureproprofession) => {
    expect(expPageTitle).toEqual(insureproprofession);
});

When(/^insurepro profession page should contain \"([^\"]*)\" dropdown$/, async (searchforprofession) => {
    expect(await JobsPage.getSearchForProfText()).toEqual(searchforprofession);
});

When(/^insurepro profession page should contain \"([^\"]*)\" button$/, async (conBtn) => {
    expect(await JobsPage.getConBtnText()).toEqual(conBtn);
});

Then(/^select \"([^\"]*)\" as the profession$/, async (jType) => {
    await JobsPage.selectJob(jType)
});

When(/^click on the Continue button on the insurepro profession page$/, async () => {
    await JobsPage.clickOnTheConBtn()
});

Then(/^user should navigate from profession page to the next page and title should be \"([^\"]*)\"$/, async (insureprowhyareyoulookingforinsurance) => {
    expect(await JobsPage.getPageTitle()).toEqual(insureprowhyareyoulookingforinsurance);
});