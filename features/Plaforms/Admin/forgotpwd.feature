Feature: Forgot Password

@run
Scenario: Forgot password
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I click on the "Forgot Email/Password?" textlink
Then I should see Account password text 
