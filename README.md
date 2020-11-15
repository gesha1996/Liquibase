# Liquibase


HomeWork
My framework is created based on POM , using Cucumber.
pom.xml file includes all the required dependencies and plugins 
Cucumber Report is created in the cucumber-report folder.
INSTRUCTIONS: Given Test cases can be run from the testRunner1 Class. 
Both Test Cases should Pass New test cases can be added in the given feature file or in new feature files .
All the steps should be implemented in StepDefs folder


1) Request URL for the first TEST CASE 1: https://hub-staging.liquibase.com/api/v1/users/793ba16c-8466-4b8a-bd7b-8801fb2b24a8
Request Method: PUT 
Status Code: 200 -Response


Request Headers
:authority: hub-staging.liquibase.com
:method: PUT
:path: /api/v1/users/793ba16c-8466-4b8a-bd7b-8801fb2b24a8
:scheme: https
accept: application/json, text/plain, */*
accept-encoding: gzip, deflate, br
accept-language: en-US,en;q=0.9
authorization: (given)
content-length: 247
content-type: application/json
cookie: (given)
BAsically sending a PUT request with body content given below:
{userName: "gesha.qa", email: "gesha.qa@gmail.com",…}
bio: "QA tester, 6+ years of qa automation experience"
company: "AnyCompany"
email: "gesha.qa@gmail.com"
familyName: "Nazaralieva"
givenName: "Aigerim"
middleName: "T"
url: "https://hub-staging.liquibase.com/landing-page"
userName: "gesha.qa"
2) Request URL for TEST CASE 2: https://hub-staging.liquibase.com/api/v1/organizations/f68f2005-c05b-4618-9c47-813f0fe7d5f3/projects/785c1ed9-c619-40bf-aad7-daf3c638ab02
Request Method: GET
Status Code: 200 -RESPONSE


Request Headers
:authority: hub-staging.liquibase.com
:method: GET
:path: /api/v1/organizations/f68f2005-c05b-4618-9c47-813f0fe7d5f3/projects/785c1ed9-c619-40bf-aad7-daf3c638ab02
:scheme: https
accept: application/json, text/plain, */*
accept-encoding: gzip, deflate, br
accept-language: en-US,en;q=0.9
authorization: (given)
cookie: (given)
2)
1.
Bug Name:FirstName,LastName/MiddleName/URL
Bug ID: 1
Area Path: Settings->User Info
Severity: HIGH 
Priority: HIGH
Assigned to: developer X
Reported By: Aigerim
Reported On: 11/13/2020
Reason: Bug
Status: New
Description:Given fields accept invalid values such as symbols, numbers etc
Expected: Should give error message when user inputs invalid symbols


2.
            Bug Name:FirstName,LastName
Bug ID: 2
Area Path: Settings->User Info
Severity: HIGH 
Priority: HIGH
Assigned to: developer X
Reported By: Aigerim
Reported On: 11/13/2020
Reason: Bug
Status: New
Description: Accepts empty fields
Expected: Should ask to fill given fields if left empty
