Feature : Campaign updates
         
         Scenario: Login user - email & password
         When Click on Sign In menu
         Then Enter correct email and password
         Then Click login button
         And Check toast message "pass"

         Scenario: :Go to Profile (My campaigns)
         When click on Profile
         Then dropdown appears
         Then click on My Campaigns
         Then Active campaigns should appear
         

         Scenario: Update Campaigns
         When click on campaign to edit
         Then add/edit page should appear
         Then enter all the fields
         Then click on submit button for approval
         And check Success message "Submitted successfully for approval"


