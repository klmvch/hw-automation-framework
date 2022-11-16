@checkboxesTest
Feature: Checkboxes page

    Background:
        Given I am on the "checkboxes" page

    Scenario: As a user, I can tick the checkbox
        When I click the check mark on the empty checkbox
        Then I can see the ticked checkbox
  
    Scenario: As a user, I can untick the checkbox
        When I click the check mark on the marked checkbox
        Then I can see the unticked checkbox