package Takeaway.Definitions;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(plugin = {"progress", "html:target/cucumber-html-report", "json:target/cucumber.json"},
        features = "src/test/java/Takeaway/features")


public class RunTest extends AbstractTestNGCucumberTests {
}




