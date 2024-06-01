Feature: User Registration on Axate


  Scenario Outline: Registering a new user on Staging Site Axate
    
    
    Given the user is on the article page "<article_url>"
    When the user clicks on "Get a day pass", yellow button, inside the article
    And the user fills in a random "<Email Address>"
    And the user selects "<Country>" as the country and enters a valid UK "<PostCode>"
    And the user selects a random preference for marketing preferences
    And the user clicks "Continue"
    And the user selects any payment amount
    And the user selects Voucher
    And the user fills in "<Voucher Code>" 
    And the user clicks "Continue"
    Then the user should see confirmation "<Confirmation Message>" 

    Examples:
      | article_url                                           | Email Address                | Country                   | PostCode        | Payment amount | Voucher Code | Confirmation Message |
      | https://yrk.branch-master.axate.io/articles/1         | test129@gmail.com            | United Kingdom            | TW3 3AE         |                | QA2024       |                      |
     
