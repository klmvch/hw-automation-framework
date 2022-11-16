@hoversTest
Feature: Hovers page

    Background: 
        Given I am on the "hovers" page

    Scenario Outline: As a user, I can hover on profile and see the info
        When I hover on <profile>
        Then I can see a profile <info>
        Examples:
            | profile                                 | info                                       |
            | '/html/body/div[2]/div/div/div[1]/img'  | '/html/body/div[2]/div/div/div[1]/div/h5'  |
            | '/html/body/div[2]/div/div/div[2]/img'  | '/html/body/div[2]/div/div/div[2]/div/h5'  |
            | '/html/body/div[2]/div/div/div[3]/img'  | '/html/body/div[2]/div/div/div[2]/div/h5'  |


    

