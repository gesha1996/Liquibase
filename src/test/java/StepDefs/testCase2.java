package StepDefs;

import Pages.Page1;
import Pages.Page2;
import Utilities.Driver;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class testCase2 {
    WebDriver driver= Driver.getDriver();
    Page2 page2=new Page2();
    WebDriverWait wait=new WebDriverWait(driver,5);
    Actions actions=new Actions(driver);

    @When("user clicks on Project")
    public void user_clicks_on_Project() {
wait.until(ExpectedConditions.elementToBeClickable(page2.projectBtn));
     actions.moveToElement(page2.projectBtn).click().build().perform();
    }

    @When("user clicks on expand project")
    public void user_clicks_on_expand_project() {
   page2.expandProjectBtn.click();
    }

    @When("user clicks on operations button and chooses pass for result")
    public void user_clicks_on_operations_button_and_chooses_pass_for_result() {
page2.operationsBtn.click();
page2.resultBtn.click();
page2.passBtn.click();
    }

    @When("user expands operations")
    public void user_expands_operations() {
      page2.noOperations.click();
    }

    @When("user verifies no results")
    public void user_verifies_no_results() {
String text="Whoops! It looks like we don't have any Operations to show you here. Go add some!";
wait.until(ExpectedConditions.visibilityOf(page2.text));
        Assert.assertEquals(text, page2.text.getText());
    }
}
