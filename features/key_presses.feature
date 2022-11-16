@keyPressesTest
Feature: Key presses page

    Background:
        Given I am on the "key_presses" page
    
    Scenario Outline:: As A user, I can press a key and see what I inputted
        When I press a <key>
        Then I see a "<result>" on the screen
        Examples:
        | key |  result              |
        | 1   |  You entered: 1      |
        | A   |  You entered: A      |
        | \/  |  You entered: SLASH  |
