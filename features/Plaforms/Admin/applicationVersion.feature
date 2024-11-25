Feature: Application Version verification

@run
Scenario: Verify the Version of application
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
And I should see Version "1.3.4" text
