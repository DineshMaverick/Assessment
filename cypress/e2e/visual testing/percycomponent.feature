
@visual
@desktop @tablet

Feature: percy web component testing
  Scenario: Extraction of components
    Given I go to staging page
    And I have corresponding device viewport1
    Then I take a screenshot of staging page
    Given I go to Preprod page
    And I have corresponding device viewport2
    Then I take a screenshot of preprod page