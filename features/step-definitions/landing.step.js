import { Given,When,Then } from "@wdio/cucumber-framework";
import LandingPage from '../pageobjects/landing.page'

Given(/^user is on insurepro landing page$/,async () => {
    LandingPage.openLandingPage();
})

When(/^user gets the title of the insurepro landing page$/,async () => {
    // await expect(LandingPage.languageLink).toBePresent();
    // await expect(LandingPage.quoteButton).toBePresent();
    await LandingPage.getPageTitle();
})
