Feature: InsurePro landing page features

  Scenario: Verify the elements on the InsurePro landing page
    Given user is on insurepro landing page
    When user gets the title of the insurepro landing page
    When insurepro landing page title should be "InsurePro"
    When insurepro landing page should contain "Continuar en español" link
    Then Start to type your Then step here insurepro landing page should contain "Get a Quote" button