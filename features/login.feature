# language: en
@login
Feature: OrangeHRM demo login
  Verify that a user can login to the OrangeHRM demo site using valid credentials.

  Scenario: Login with valid credentials
    Given I open the OrangeHRM demo page
    When I login with username "Admin" and password "admin123"
    Then I should be logged in
