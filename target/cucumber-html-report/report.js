$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/testCase1.feature");
formatter.feature({
  "name": "Test Case 1",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to the website with \"url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.testCase1.the_user_navigates_to_the_website_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Updating user info",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user logs in with \"username\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.testCase1.user_logs_in_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Settings",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.testCase1.user_clicks_on_Settings()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on User Info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.testCase1.user_clicks_on_User_Info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills the fields",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.testCase1.user_fills_the_fields(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies updated info",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.testCase1.the_user_verifies_updated_info()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to the website with \"url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.testCase1.the_user_navigates_to_the_website_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on Project",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefs.testCase2.user_clicks_on_Project()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on expand project",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefs.testCase2.user_clicks_on_expand_project()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on operations button and chooses pass for result",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefs.testCase2.user_clicks_on_operations_button_and_chooses_pass_for_result()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user expands operations",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefs.testCase2.user_expands_operations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies no results",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefs.testCase2.user_verifies_no_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});