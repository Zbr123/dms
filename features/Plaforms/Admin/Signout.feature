Feature: Sign out Page

@run
Scenario: Successfully logging out of the application
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "tu-test40.reuse2@ccnoemail.com" and "BROKAW224573" password
And I click on the "Sign in" button
Then the additional information banner should be visible
When I click on the signout button
And I should see Sign in text

