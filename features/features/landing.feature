@IM-601
Feature: InsurePro landing page features

  Background: Navigating to the landing page
    Given user is on insurepro landing page

  @TEST_IM-598 @TestCase
  Scenario: Verify the elements on the InsurePro landing page
    When user gets the title of the insurepro landing page
    When insurepro landing page title should be "InsurePro"
    When insurepro landing page should contain "Continuar en español" link
    Then insurepro landing page should contain "Get a Quote" button

  @TEST_IM-599 @TestCase
  Scenario: Verify the Get a Quote button
    When click on the Get A Quote button
    Then user should navigate to the next page and title should be "InsurePro - State"