@fixtures
@staging
@desktop @tablet @mobile

Feature: Fixtures test-1 library check

  I want to check if fixtures for test-1 library are properly inserted on staging environment

  Background:
    Given I go to test-1 library products page
    And I have corresponding device viewport

  Scenario: Login with correct email and password
    Then I can see 3 products in the list

