Feature: Login Page

@run
Scenario: User should be able to login with valid credentials on DMS portal
Given I authenticate with Salesforce and retrieve an access token
When I make a POST request to create an external vendor with random email 
Then I verify the response to ensure the vendor is created successfully
When I navigate to "https://clearcaptions123--ccstaging.sandbox.my.salesforce.com/"
And I enter username and password on salesforce
And I click on the login button on salesforce
And I wait for 15 seconds
And I search the created user on Salesforce
And I wait for 5 seconds
And I click on the searched user on Salesforce
And I wait for 5 seconds
And I get the password of searched user on Salesforce
And I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
When I enter username and password on DMS portal
And I click on the "Sign in" button
Then the additional information banner should be visible


@run
Scenario: User should see error when signing in with an invalid username
Given I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
When I enter username "invalid-user" and "BROKAW224573" password
And I click on the "Sign in" button
Then I should see invalid "The username or password you entered is incorrect" text

@run
Scenario: User should see error when signing in with an invalid password
Given I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
When I enter username "tu-test40.reuse2@ccnoemail.com" and "invalid-pwd" password
And I click on the "Sign in" button
Then I should see invalid "You have entered incorrect login credentials. Please try again." text

@run
Scenario: User should see error when signing in with an invalid password and username
Given I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
When I enter username "invalid-user" and "invalid-pwd" password
And I click on the "Sign in" button
Then I should see invalid "The username or password you entered is incorrect" text

@run
Scenario: User should see error when signing in with blank username
Given I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
When I enter username "" and "pass" password
And I click on the "Sign in" button
Then I should see invalid "Email Address is required" text

@run
Scenario: User should see error when signing in with blank password
Given I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
When I enter username "invalid-user" and "" password
And I click on the "Sign in" button
Then I should see invalid "Password is required" text

# @run    
# Scenario: Login with both username and password blank
# Given I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
# When I click on the "Sign in" button
# Then I should see enter email and password messages