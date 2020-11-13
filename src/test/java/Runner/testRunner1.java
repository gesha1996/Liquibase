package Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber-html-report",
                "json:target/cucumber.json", "junit:target/cucumber.xml"},
        features ="src/test/resources/features/testCase1.feature",
        glue ="StepDefs",
        dryRun =false,
        strict = true,
        monochrome = true
)

public class testRunner1 {

}
