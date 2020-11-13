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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Aigerims-MacBook-Pro.local\u0027, ip: \u00272600:1008:b16c:882c:254c:2e7e:295b:871a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/c9/mzt_gq_14k1...}, goog:chromeOptions: {debuggerAddress: localhost:56137}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f5358c892f93d4be2c8de2e779319748\n*** Element info: {Using\u003dxpath, value\u003d(//input[@id\u003d\u0027signInFormUsername\u0027])[2]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\n\tat StepDefs.testCase1.user_logs_in_with_and(testCase1.java:36)\n\tat ✽.user logs in with \"username\" and \"password\"(file:///Users/gesha1996/Documents/LiquibaseHW/src/test/resources/features/testCase1.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Settings",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.testCase1.user_clicks_on_Settings()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on User Info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.testCase1.user_clicks_on_User_Info()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "the user verifies updated info",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.testCase1.the_user_verifies_updated_info()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Aigerims-MacBook-Pro.local\u0027, ip: \u00272600:1008:b16c:882c:254c:2e7e:295b:871a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/c9/mzt_gq_14k1...}, goog:chromeOptions: {debuggerAddress: localhost:56137}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f5358c892f93d4be2c8de2e779319748\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat StepDefs.Hooks.setup(Hooks.java:19)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user navigates to the website with \"url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.testCase1.the_user_navigates_to_the_website_with(java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on expand project",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefs.testCase2.user_clicks_on_expand_project()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on operations button and chooses pass for result",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefs.testCase2.user_clicks_on_operations_button_and_chooses_pass_for_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user expands operations",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefs.testCase2.user_expands_operations()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies no results",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefs.testCase2.user_verifies_no_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});