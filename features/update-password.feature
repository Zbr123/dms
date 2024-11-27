Feature: Update Password

@run
Scenario: User should be able to update password on DMS portal
Given I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
When I enter username "tu-test40.reuse2@ccnoemail.com" and "BROKAW224573" password
And I click on the "Sign in" button
Then the additional information banner should be visible
When I click on the "Change Password" textlink 
Then I should see Change Password text
When I enter password "BROKAW224573" for "Current Password" field
And I enter password "test123T" for "New Password" field
And I enter password "test123T" for "Confirm New Password" field
And I click on the "Update" button
Then I "should not" see "Unable to update password, please try again later" text

@run
Scenario: User should see error if passwords do not match while updating password
Given I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
When I enter username "tu-test40.reuse2@ccnoemail.com" and "BROKAW224573" password
And I click on the "Sign in" button
Then the additional information banner should be visible
When I click on the "Change Password" textlink 
Then I should see Change Password text
When I enter Currentpwd "BROKAW224573" Newpwd "Zubair@123" confirmpwd "zubair"
And I click on the "Update" button
Then I should see "New Password and confirm password must match" text

@run 
Scenario: User should see error if passwords format is incorrect while updating password
Given I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
When I enter username "tu-test40.reuse2@ccnoemail.com" and "BROKAW224573" password
And I click on the "Sign in" button
Then the additional information banner should be visible
When I click on the "Change Password" textlink 
Then I should see Change Password text
When I enter Currentpwd "BROKAW224573" Newpwd "123456789" confirmpwd "123456789"
And I click on the "Update" button
Then I should see "Invalid password format, please use atleast one uppercase, one lowercase and one digit" text


@run
Scenario: User should see error if passwords legth is less than eight characters while updating password
Given I navigate to "https://portal.stage-usw2.clearcaptions.com/login"
When I enter username "tu-test40.reuse2@ccnoemail.com" and "BROKAW224573" password
And I click on the "Sign in" button
Then the additional information banner should be visible
When I click on the "Change Password" textlink 
Then I should see Change Password text
When I enter Currentpwd "BROKAW224573" Newpwd "123" confirmpwd "123"
And I click on the "Update" button
Then I should see "Minimum length of password must be eight characters" text