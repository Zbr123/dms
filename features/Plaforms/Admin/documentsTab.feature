Feature: Document page 

@run
Scenario: User should see "View Document Examples" on the portal
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "testhary23@mail.com" and "HARISS236743" password
And I click on the "Sign in" button
Then the additional information banner should be visible
When I click on the "Documents" button
Then I should see "Why we need to collect identity documents" on document page
When I click on "View Document Examples" button
Then I should see identify "Identification document examples" text

@run
Scenario: user View "upload Document instruction" on portal
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "testhary23@mail.com" and "HARISS236743" password
And I click on the "Sign in" button
Then the additional information banner should be visible
When I click on the "Documents" button
Then I should see "Why we need to collect identity documents" on document page
When I click on "View Upload Instructions" button
Then I should see steps "How to upload documents" text

@run
Scenario: user see W"hy we need to collect identity documents" on Documnet portal
Given I navigate to "https://portal.tst-usw2.clearcaptions.com/login"
When I enter username "testhary23@mail.com" and "HARISS236743" password
And I click on the "Sign in" button
Then the additional information banner should be visible
When I click on the "Documents" button
Then I should see "Why we need to collect identity documents" on document page
When I click on "Learn More" button
Then I should see steps "Why we need to collect your identity documents" text