Feature: Profile page feature

# # @run
# # Scenario: Login with invalid SSN and DOB 
# # Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
# # When I enter username "testhary23@mail.com" and "HARISS236743" password
# # And I click on the "Sign in" button
# # Then the additional information banner should be visible
# # When I enter "1234" SSN
# # And I enter "12121934" date
# # And I click on the "Submit" button
# # And I click on the "Try Again" button
# # Then the additional information banner should be visible

@run
Scenario: Clear SSN and Date of Birth fields on DMS portal 
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "hariss@mail.com" and "TEST890972" password
And I click on the "Sign in" button
Then the additional information banner should be visible
When I enter SSN "1234" text
And I enter DATE "12121934" text
# When I enter SSN "1234" for "Enter last 4 digits of SSN" field
# When I enter DATE "12121934" for "mm/dd/yyyy" field
And I click on the "Clear" button
Then the Submit button should be disabled again

@run
Scenario: Displaying zero attempts remaining after three invalid data submissions
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "hariss@mail.com" and "TEST890972" password
And I click on the "Sign in" button
Then the additional information banner should be visible
When I enter SSN "1234" text
And I enter DATE "12121934" text
And I click on the "Submit" button
And I click on the "Try Again" button
Then I should see You have "2" attempts remaining.
And I enter DATE "12121934" text
And I click on the "Submit" button
And I click on the "Try Again" button
Then I should see You have "1" attempts remaining.
And I enter DATE "12121934" text
And I click on the "Submit" button
And I click on the "Upload a Document" button
Then I should see "Why we need to collect identity documents" on document page
When I click on the "Profile" button
Then I should see You have "0" attempts remaining.




