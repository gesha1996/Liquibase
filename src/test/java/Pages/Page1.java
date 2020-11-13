package Pages;

import Utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
// Whoops! It looks like we don't have any Operations to show you here. Go add some!
import java.util.List;

public class Page1 {
    public Page1() {
        WebDriver driver = Driver.getDriver();
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//button[@class='mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted']//span[@class='mat-button-wrapper']")
    public WebElement loginBtn;
    @FindBy(xpath = "(//input[@id='signInFormUsername'])[2]")
    public WebElement username;
    @FindBy(xpath = "(//input[@id='signInFormPassword'])[2]")
    public WebElement password;
    @FindBy(xpath = "(//input[@type='Submit'])[2]")
    public WebElement signInBtn;
    @FindBy(xpath = "//mat-icon[contains(text(),\"close\")]")
    public WebElement closeBtn;
    @FindBy(xpath = "//mat-icon[contains(text(), \"settings\")]")
    public WebElement settingsBtn;
    @FindBy(xpath = "//div[contains(text(), \"User Info\")]")
    public WebElement userInfoBtn;
    @FindBy(xpath = "//div[@class='edit-user__left']//input")
    public List<WebElement> userInfoList;
    @FindBy(xpath = "//input[@id='mat-input-8']")
    public WebElement url;
    @FindBy(xpath = "//textarea[@id='mat-input-10']")
    public WebElement bio;
    @FindBy(xpath = "//span[contains(text(), \"Update Profile\")]//..")
    public WebElement updateBtn;

}
