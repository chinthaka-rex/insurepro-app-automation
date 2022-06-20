Feature: State page features

  Background: Navigating to the state page
    Given user is on insurepro state page

  Scenario: Verify the elements on the InsurePro state page
    Then user gets the title of the insurepro state page
    When insurepro state page title should be "State"
    When insurepro state page should contain "Search for State" dropdown
    When insurepro state page should contain "Continue" button

  #Scenario: Verify the State dropdown and the Continue button on the state page
  #  Then select "florida" as the state
  #  When click on the Continue button on the insurepro state page
  #  Then user should navigate from state page to the next page and title should be "Profession"