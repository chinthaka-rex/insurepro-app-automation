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
    
});

When(/^insurepro profession page should contain \"([^\"]*)\" button$/, async (conBtn) => {
    
});

Then(/^select \"([^\"]*)\" as the profession$/, async (housecleaning) => {
    
});

When(/^click on the Continue button on the insurepro profession page$/, async () => {
    
});

Then(/^user should navigate from profession page to the next page and title should be \"([^\"]*)\"$/, async (insureprowhyareyoulookingforinsurance) => {
    
});