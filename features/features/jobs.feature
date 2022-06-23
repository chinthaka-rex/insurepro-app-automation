Feature: Profession page features

  Background: Navigating to the state page
    Given user is on insurepro profession page

  Scenario: Verify the elements on the InsurePro profession page
    Then user gets the title of the insurepro profession page
    When insurepro profession page title should be "InsurePro - Profession"
    When insurepro profession page should contain "Search for Profession" dropdown
    When insurepro profession page should contain "Continue" button

  Scenario: Verify the profession dropdown and the Continue button on the profession page
    Then select "House Cleaning" as the profession
    When click on the Continue button on the insurepro profession page
    Then user should navigate from profession page to the next page and title should be "InsurePro - Why are you looking for insurance?"