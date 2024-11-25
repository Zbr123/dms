Feature: Login Page

@run
Scenario: Login with valid credentials on DMS portal
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "tu-test40.reuse2@ccnoemail.com" and "BROKAW224573" password
And I click on the "Sign in" button
Then the additional information banner should be visible


@run
Scenario: Login with an invalid username
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "invalid-user" and "BROKAW224573" password
And I click on the "Sign in" button
Then I should see invalid "The username or password you entered is incorrect" text

@run
Scenario: Login with an invalid password
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "tu-test40.reuse2@ccnoemail.com" and "invalid-pwd" password
And I click on the "Sign in" button
Then I should see invalid "You have entered incorrect login credentials. Please try again." text

@run
Scenario: Login with invalid username and invalid password
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "invalid-user" and "invalid-pwd" password
And I click on the "Sign in" button
Then I should see invalid "The username or password you entered is incorrect" text

@run
Scenario: Login with blank username
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "" and "pass" password
And I click on the "Sign in" button
Then I should see invalid "Email Address is required" text

@run
Scenario: Login with blank password
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "invalid-user" and "" password
And I click on the "Sign in" button
Then I should see invalid "Password is required" text

# @run    
# Scenario: Login with both username and password blank
# Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
# When I click on the "Sign in" button
# Then I should see enter email and password messages
