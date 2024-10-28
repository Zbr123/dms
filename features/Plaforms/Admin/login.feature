Feature: Login Page

@run
Scenario: Login with valid credentials on DMS portal
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter valid credentials
And I click on the "Sign in" button
Then the additional information banner should be visible


