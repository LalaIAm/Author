@S119e89ee
Feature: Registration

  @Tcd1cee9c
  Scenario: User can access the registration form
    Given I am a new user on the app
    When I am on the Registration screen
    Then I should see the registration form
    Then I should also see fields for my name, email, and password

  
    