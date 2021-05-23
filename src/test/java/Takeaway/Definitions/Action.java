package Takeaway.Definitions;

import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.testng.Assert.fail;

public class Action {
    public static final Logger LOGGER = LoggerFactory.getLogger(Action.class);
    private static WebDriver driver;


    @FindBy(css = ".meal-add-btn-wrapper")
    WebElement mealAddBtn;

    public Action(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    public void scrollToElement(WebElement element, WebDriver driver) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView({block: 'center', inline: 'nearest'})", element);
    }

    public void clickToMealAddBtn() {
        WebDriverWait wait = new WebDriverWait(driver, 25);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".meal-add-btn-wrapper")));
        scrollToElement(mealAddBtn, driver);
        mealAddBtn.click();
    }
}


