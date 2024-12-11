Feature: Profile page feature

@run
Scenario: Login with invalid SSN and DOB 
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
And I wait for 5 seconds
And I scroll down the outer popup of e-signature consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of self certification consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of terms of service consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of URD consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 2 seconds
Then the additional information banner should be visible
When I enter DATE "12121934" text
And I click on the "Submit" button
And I click on the "Try Again" button
Then the additional information banner should be visible

@run
Scenario: User should see submit button disabled if any field is missing
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
And I wait for 5 seconds
And I scroll down the outer popup of e-signature consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of self certification consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of terms of service consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of URD consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 2 seconds
Then the additional information banner should be visible
When I enter DATE "12121934" text
And I click on the "Clear" button
Then the "Submit" button should be disabled again

@run
Scenario: User should see zero attempts remaining after three invalid data submissions
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
And I enter username and password on DMS portal
And I click on the "Sign in" button
And I wait for 5 seconds
And I scroll down the outer popup of e-signature consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of self certification consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of terms of service consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of URD consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 2 seconds
Then the additional information banner should be visible
And I enter DATE "12121934" text
And I click on the "Submit" button
And I click on the "Try Again" button
Then I should see You have "2" attempts remaining.
When I enter DATE "12121934" text
And I click on the "Submit" button
And I click on the "Try Again" button
Then I should see You have "1" attempts remaining.
When I enter DATE "12121934" text
And I click on the "Submit" button
And I click on the "Upload a Document" button
Then I should see "Why we need to collect identity documents" on document page
When I click on the "Profile" button
Then I should see You have "0" attempts remaining.

@run
Scenario: User should be able to sign all the consents
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
And I wait for 5 seconds
And I scroll down the outer popup of e-signature consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of self certification consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of terms of service consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 5 seconds
And I scroll down the outer popup of URD consent
And I wait for 2 seconds
And I scroll down the consent text
And I check the terms and conditions checkbox
And I click on the "Continue" button
And I wait for 2 seconds
Then the additional information banner should be visible

@run
Scenario: Portal should sign out the user if cancel button is pressed on consent
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
And I wait for 5 seconds
And I click on the "Cancel" button
Then I should see Sign in text