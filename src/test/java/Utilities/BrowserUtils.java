package Utilities;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;

public class BrowserUtils {
    public static void takeScreenshot() throws IOException {
        File src = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.FILE);
        File desFile = new File("ScreenShotFile/" + System.currentTimeMillis() + ".png");
        FileUtils.copyFile(src, desFile);

    }
}
