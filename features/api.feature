Feature: Api

@run
Scenario: Create a DMS portal customer through salesforce API and login to DMS portal
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
And I wait for 10 seconds
