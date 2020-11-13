package Utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class Driver {
    private static WebDriver driver;

    public static WebDriver getDriver(){
        String browser="chrome";
        if (driver == null || ((RemoteWebDriver) driver).getSessionId() == null) {
            if (browser.equals("chrome")){
                WebDriverManager.chromedriver().setup();
                driver=new ChromeDriver();
                return driver;
            }else if(browser.equals("firefox")){
                WebDriverManager.firefoxdriver().setup();
                driver=new FirefoxDriver();
                return driver;
            } else if(browser.equals("opera")){
                WebDriverManager.operadriver().setup();
                driver=new OperaDriver();
                return driver;
            }else if(browser.equals("ie")){
                WebDriverManager.iedriver().setup();
                driver=new InternetExplorerDriver();
                return driver;
            }
        }
        return driver ;


    }
    public static void close(){
        if(driver!=null){
            driver.quit();
            driver=null;
        }
    }
}
