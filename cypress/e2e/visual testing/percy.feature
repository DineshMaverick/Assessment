@visual
@staging @softlaunch
@desktop @tablet


Feature: Visual regression with Percy screenshots

  Scenario: Test-1 product page
    Given I go to test-1 library products page
    And I have corresponding device viewport
    When I take a screenshot and name it test-1 products page

  Scenario: Test-2 product page
    Given I go to test-2 library products page
    And I have corresponding device viewport
    When I take a screenshot and name it test-2 products page

  Scenario: Test-3 product page
    Given I go to test-3 library products page
    And I have corresponding device viewport
    When I take a screenshot and name it test-3 products page

  Scenario: Test-4 product page
    Given I go to test-4 library products page
    And I have corresponding device viewport
    When I take a screenshot and name it test-4 products page