package StepDefs;

import Pages.Page1;
import Utilities.ConfigReader;
import Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class testCase1 {
    WebDriver driver=Driver.getDriver();
    Page1 page1=new Page1();
    Actions actions=new Actions(driver);
    WebDriverWait wait=new WebDriverWait(Driver.getDriver(),5);
    @Given("the user navigates to the website with {string}")
    public void the_user_navigates_to_the_website_with(String string) throws IOException {

        driver.navigate().to(ConfigReader.getProperty("configuration", "url"));

    }


    @When("user logs in with {string} and {string}")
    public void user_logs_in_with_and(String string, String string2) throws IOException, InterruptedException {
        page1.loginBtn.click();
        page1.username.sendKeys(ConfigReader.getProperty("configuration", "username"));
        page1.password.sendKeys(ConfigReader.getProperty("configuration", "password"));
        page1.signInBtn.click();

    }

    @When("user clicks on Settings")
    public void user_clicks_on_Settings() {
        wait.until(ExpectedConditions.elementToBeClickable(page1.closeBtn));
        page1.closeBtn.click();


         wait.until(ExpectedConditions.elementToBeClickable(page1.settingsBtn));
        actions.moveToElement(page1.settingsBtn).click().build().perform();
      // page1.settingsBtn.click();
    }

    @When("user clicks on User Info")
    public void user_clicks_on_User_Info() {
      page1.userInfoBtn.click();
    }

    @When("user fills the fields")
    public void user_fills_the_fields(List<String> dataTable) throws IOException, InterruptedException {
    for(int i=0;i<=dataTable.size()-1;i++){

        page1.userInfoList.get(i).clear();
        page1.userInfoList.get(i).sendKeys(dataTable.get(i));
    }
    page1.url.clear();
    page1.url.sendKeys(ConfigReader.getProperty("configuration","url"));
    page1.bio.clear();
    page1.bio.sendKeys(ConfigReader.getProperty("configuration", "bio"));


      //  Thread.sleep(3000);
          JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("window.scrollBy(600,1000)");
        Thread.sleep(1000);
        wait.until(ExpectedConditions.elementToBeClickable(page1.updateBtn));
        actions.moveToElement(page1.updateBtn).click().build().perform();
   // page1.updateBtn.click();
    }

    @Then("the user verifies updated info")
    public void the_user_verifies_updated_info() {
        Assert.assertTrue(page1.updateBtn.isEnabled());
    }

}
