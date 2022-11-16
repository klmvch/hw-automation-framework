@loginTest
Feature: Login page

  Background:
    Given I am on the "login" page

  Scenario: As a user, I can log ino the secure area
    When I login with tomsmith and SuperSecretPassword!
    Then I should see a flash message saying "You logged into a secure area!"

  Scenario: As a user, I cannot log ino the secure area
    When I login with foobar and barfoo
    Then I should see a flash message saying "Your username is invalid!"
