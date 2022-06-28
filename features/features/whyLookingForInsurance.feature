Feature: Why are you looking for insurance page features

    Background: Navigating to the state page
        Given user is on insurepro why are you looking for insurance page

    Scenario: Verify the elements on the InsurePro why are you looking for insurance page
        Then user gets the title of the insurepro why are you looking for insurance page
        When insurepro insurepro why are you looking for insurance page title should be "InsurePro - Why are you looking for insurance?"
        When insurepro flow 3 why are you looking for insurance page should contain "I need it for my business" button
        When insurepro flow 2 why are you looking for insurance page should contain "I have a one off job/project" button
        When insurepro flow 1 why are you looking for insurance page should contain "I have insurance, but i’m looking to save" button
        When insurepro why are you looking for insurance page should contain "Continue" button

    Scenario: Verify the flow 2 (I have a one off job/project button) and the Continue button on the why are you looking for insurance page
        When user selects the "I have a one off job/project" flow
        Then click on the Continue button on the insurepro state page
        When user should navigate from state page to the next page and title should be "InsurePro - Why are you looking for insurance?"
        #InsurePro - When is your job?