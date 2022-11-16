@addRemoveTest
Feature: Add/Remove elements page

  Background: 
    Given I am on the "add_remove_elements/" page

  Scenario: As a user, I can add 'Delete' button
    When I click on the 'Add element' button
    Then I see a new 'Delete' button
    When I click on the 'Delete' button
    Then I see that the 'Delete' button is removed

  Scenario: As a user, I can add two 'Delete' buttons
    When I click on the 'Add element' button twice
    Then I see the second 'Delete' button


