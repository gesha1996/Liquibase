package Pages;

import Utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page2 {
    public Page2(){
        WebDriver driver= Driver.getDriver();
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "(//mat-icon[contains(text(), \"account_tree\")])[1]")
    public WebElement projectBtn;
    @FindBy(xpath = "(//mat-icon[contains(text(), \"account_tree\")])[2]")
    public WebElement expandProjectBtn;
    @FindBy(xpath = "//div[contains(text(), \"Operations\")]")
    public WebElement operationsBtn;
    @FindBy(id = "mat-select-1")

    public WebElement resultBtn;
    @FindBy(id="mat-option-5")
    public WebElement passBtn;
    @FindBy(id = "mat-expansion-panel-header-0")
    public WebElement noOperations;
    @FindBy(xpath = "//div[contains(text(),\" Whoops! It looks like we don't have any Operations to show you here. Go add some! \")]")
    public WebElement text;





}
