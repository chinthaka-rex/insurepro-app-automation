import { Given,When,Then } from "@wdio/cucumber-framework";
import landingPage from '../pageobjects/landing.page'

Given(/^user is on insurepro landing page$/,async () => {
    landingPage.openLandingPage();
})
