Feature: Test Case 1

  Background:
    Given the user navigates to the website with "url"


  Scenario: Updating user info
    When user logs in with "username" and "password"
    And user clicks on Settings
    And user clicks on User Info
    And user fills the fields
      | Aigerim     |
      | T           |
      | Nazaralieva |

    Then the user verifies updated info

  Scenario:
    * user clicks on Project
    * user clicks on expand project
    * user clicks on operations button and chooses pass for result
    * user expands operations
    * user verifies no results





