package Takeaway.Definitions;

import Takeaway.ui.TakeawayTestCases;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.BeforeStep;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;

import java.io.File;
import java.time.LocalTime;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.testng.Assert.fail;

public class StepDefinitions {

    private static final Logger LOGGER = LoggerFactory.getLogger(StepDefinitions.class);
    private WebDriver driver;


    private void startBrowser(String browser) {
        if (browser.equalsIgnoreCase("chrome")) {
            driver = new ChromeDriver();
            configureBrowser(browser);
        } else if (browser.equalsIgnoreCase("firefox")) {
            driver = new FirefoxDriver();
            configureBrowser(browser);
        } else {
            throw new RuntimeException("Not supported browser");
        }
    }

    private void configureBrowser(String browser) {
        LOGGER.info("==================== TEST START ====================");
        LOGGER.info("Starting browser:" + browser);
        driver.manage().deleteAllCookies(); //delete cookies
        driver.manage().window().maximize(); //To maximize browser
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS); //Implicit wait
    }

    @Before
    public void before() {
        WebDriverManager.chromedriver().setup();
        WebDriverManager.firefoxdriver().setup();
        //  startBrowser("firefox");
        startBrowser("chrome");
    }

//    @After
//    public void after(Scenario scenario) {
//        if (scenario.isFailed()) {
//            if (driver instanceof TakesScreenshot) {
//                TakesScreenshot screenshotTakingDriver = (TakesScreenshot) driver;
//                try {
//                    File localScreenshots = new File(new File("target"), "screenshots");
//                    if (!localScreenshots.exists() || !localScreenshots.isDirectory()) {
//                        localScreenshots.mkdirs();
//                    }
//                    String fileName = scenario.getName().replace(" ", "_") + "_" + LocalTime.now().getMinute() + ".png";
//                    File screenshot = new File(localScreenshots, fileName);
//                    FileUtils.copyFile(screenshotTakingDriver.getScreenshotAs(OutputType.FILE), screenshot);
//                    LOGGER.info("Screenshot saved with name:" + fileName);
//                } catch (Exception e1) {
//                    LOGGER.error("Unable to take screenshot", e1);
//                }
//            } else {
//                LOGGER.info("Driver '{}' can't take screenshots so skipping it.", driver.getClass());
//            }
//        }
//        driver.quit(); //close browser instance
//    }

//    @After
//    public void after() {
//        driver.quit();
//    }

    private void scrollToElement(WebElement element, WebDriver driver) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView({block: 'center', inline: 'nearest'})", element);
    }

    @Given("Takeaway test page")
    public void takeawayPage() {
        driver.get("https://www.thuisbezorgd.nl/en/");
    }

    @When("Type {string} as a postcode into the address field")
    public void typePostcodeIntoTheAddressField(String postcode) {
        WebElement searchInputField = driver.findElement(By.id("imysearchstring"));
        searchInputField.clear();
        searchInputField.sendKeys(postcode);
        List<WebElement> allResultsAfterTypingInSearchField = driver.findElements(By.cssSelector(".auto-complete-drop-down-content a"));
        for (WebElement currentAddress : allResultsAfterTypingInSearchField) {
            if (currentAddress.getText().contains(postcode)) {
                currentAddress.click();
                break;
            }
        }
    }

    @And("Select {string}")
    public void selectSuggestion(String suggestion) {
        List<WebElement> allReferences = driver.findElements(By.id("reference"));
        for (WebElement currentAddress : allReferences) {
            if (currentAddress.getText().contains(suggestion)) {
                currentAddress.click();
                break;
            }
        }
    }

    @Then("Navigate to {string} page and Verify that restaurants has been listed at this address on the restaurant page")
    public void navigateToRestaurantsPage(String checkPage) {
        WebDriverWait wait = new WebDriverWait(driver, 15);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".js-restaurants-counter > div:nth-child(1)")));
        Assert.assertTrue(driver.findElement(By.cssSelector(".js-restaurants-counter > div:nth-child(1)")).getText().contains(checkPage), "The list of restaurants is not loaded");
    }


    @And("Select Asello test restaurant from restaurant list")
    public void selectAsseloTestRestaurantFromRestaurantList() {
        try {
            WebElement aselloElement = driver.findElement(By.id("irestaurantO1OP07PN"));
            scrollToElement(aselloElement, driver);
            aselloElement.click();
        } catch (NoSuchElementException e) {
            fail("Element not found!!");
            e.printStackTrace();
        }
    }

    @And("Add any Asselo test item from the restaurant menu into the basket")
    public void addAnyItemFromTheRestaurantMenuIntoTheBasket() {
        WebDriverWait wait = new WebDriverWait(driver, 15);
        driver.findElement(By.id("OPN53Q377")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#isidedishselectionformOPN53Q377 > div.sidedishes > div:nth-child(1) > button")));
        WebElement showMoreButton = driver.findElement(By.cssSelector("#isidedishselectionformOPN53Q377 > div.sidedishes > div:nth-child(1) > button"));
        scrollToElement(showMoreButton, driver);
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("arguments[0].click()", showMoreButton);
//        wait.until(ExpectedConditions.elementToBeClickable(showMoreButton));
//        showMoreButton.click();

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"isidedishselectionformOPN53Q377\"]/div[1]/div[1]/div[4]/div/label")));
        WebElement tofuCheckBox = this.driver.findElement(By.xpath("//*[@id=\"isidedishselectionformOPN53Q377\"]/div[1]/div[1]/div[4]/div/label"));
        jse.executeScript("arguments[0].click()", tofuCheckBox);
//        tofuCheckBox.click();
        clickToMealAddBtn();
    }

    private void clickToMealAddBtn() {
        WebDriverWait wait = new WebDriverWait(driver, 25);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".meal-add-btn-wrapper")));
        WebElement mealAddBtn = driver.findElement(By.cssSelector(".meal-add-btn-wrapper"));
        scrollToElement(mealAddBtn, driver);
        mealAddBtn.click();
    }


    @And("Press the Order button and navigate to filling the address page")
    public void pressTheOrderButton() {
        driver.findElement(By.cssSelector(".basket.basket-container__scroller > button")).click();
    }


    @And("Fill the form with ASAP delivery option")
    public void fillTheFormWithASAPDeliveryOption() {
        Select deliveryTimeDropDown = new Select(driver.findElement(By.id("ideliverytime")));
        deliveryTimeDropDown.selectByValue("asap");
    }

    @And("Select the payment amount from the combo box at the bottom of the page")
    public void selectThePaymentAmountFromTheComboBoxAtTheBottomOfThePage() {
        Select paymentAmountDropDown = new Select(driver.findElement(By.id("ipayswith")));
        paymentAmountDropDown.selectByIndex(1);
    }

    @And("Click on Order and Pay button to finish your order process")
    public void clickOnOrderAndPayButtonToFinishYourOrderProcess() {
        WebElement orderAndPayButton = driver.findElement(By.cssSelector(".checkout-orderbutton-btn "));
        orderAndPayButton.click();

    }

    @Then("Get the order reference number from latest page")
    public void getTheOrderReferenceNumberFromLatestPage() {
        WebElement orderReferenceNumber = driver.findElement(By.cssSelector(".order-reference > span"));
        System.out.println("Order reference number:" + orderReferenceNumber.getText());
    }


    @And("Select TEST Restaurant Selenium restaurant from restaurant list")
    public void selectTESTRestaurantSeleniumRestaurantFromRestaurantList() {
        try {
            WebElement testSeleniumRestElement = driver.findElement(By.id("irestaurantQ0ONNOO"));
            scrollToElement(testSeleniumRestElement, driver);
            testSeleniumRestElement.click();
        } catch (NoSuchElementException e) {
            fail("Element not found!!");
            e.printStackTrace();
        }
    }

    @And("Add any Restaurant Selenium item from the restaurant menu into the basket")
    public void addAnyRestaurantSeleniumItemFromTheRestaurantMenuIntoTheBasket() {
        driver.findElement(By.cssSelector("._3zTQF > section > div > section > section:nth-child(2) > div:nth-child(2) > div:nth-child(1)")).click();
        clickToMealAddBtn();
    }

    @And("Select RealPizza Test restaurant from restaurant list")
    public void selectRealPizzaTestRestaurantFromRestaurantList() {
        try {
            WebElement realPizzaElement = driver.findElement(By.id("irestaurantOQPNO7PN"));
            scrollToElement(realPizzaElement, driver);
            realPizzaElement.click();
        } catch (NoSuchElementException e) {
            fail("Element not found!!");
            e.printStackTrace();
        }
    }


    @And("Add any RealPizza item from the restaurant menu into the basket")
    public void addAnyRealPizzaItemFromTheRestaurantMenuIntoTheBasket() {
        WebDriverWait wait = new WebDriverWait(driver, 15);
        driver.findElement(By.cssSelector("#O7NON00P11 > div.meal.meal__top-button.js-meal-item > div.js-meal__add-to-basket-button.menucard-meal__sidedish-button")).click();

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#isidedishselectionformO7NON00P11 > div.sidedish-footer.notranslate > div.meal-price > div.meal-price__block.meal-price__block--substract > button")));
        WebElement addSideDish = driver.findElement(By.cssSelector("#isidedishselectionformO7NON00P11 > div.sidedish-footer.notranslate > div.meal-price > div.meal-price__block.meal-price__block--substract > button"));
        scrollToElement(addSideDish, driver);
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("arguments[0].click()", addSideDish);
        addSideDish.click();
        clickToMealAddBtn();

    }


    @And("Select Taco solo restaurant from restaurant list")
    public void selecTacoSoloRestaurantFromRestaurantList() {
        try {
            WebElement realPizzaElement = driver.findElement(By.id("irestaurantORR5PRN1"));
            scrollToElement(realPizzaElement, driver);
            realPizzaElement.click();
        } catch (NoSuchElementException e) {
            fail("Element not found!!");
            e.printStackTrace();
        }
    }


    @And("Add Taco solo item from the restaurant menu into the basket")
    public void addTacoSoloItemFromTheRestaurantMenuIntoTheBasket() {
        driver.findElement(By.xpath("//*[@id=\"O050RP0RR\"]")).click();
    }

    @And("fill <address> <postcode> <city> <name> <phoneNum> <email>")
    public void fillAddressPostcodeCityNamePhoneNumEmail() {

    }

    @And("fill Address: {string} PostCode: {string} City: {string} Name: {string} PhoneNum: {string} e-mail: {string}")
    public void fillAddressPostCodeCityNamePhoneNumEMail(String address, String postcode, String city, String name, String phoneNum, String email) {
        WebElement addressField = driver.findElement(By.id("iaddress"));
        addressField.clear();
        addressField.sendKeys(address);

        WebElement postCodeField = driver.findElement(By.id("ipostcode"));
        postCodeField.clear();
        postCodeField.sendKeys(postcode);

        WebElement cityField = driver.findElement(By.id("itown"));
        cityField.clear();
        cityField.sendKeys(city);

        WebElement nameField = driver.findElement(By.id("isurname"));
        nameField.clear();
        nameField.sendKeys(name);

        WebElement emailField = driver.findElement(By.id("iemail"));
        emailField.clear();
        emailField.sendKeys(email);

        WebElement phoneNumberField = driver.findElement(By.id("iphonenumber"));
        phoneNumberField.clear();
        phoneNumberField.sendKeys(phoneNum);
    }

    @And("Fill form page Address : {string} PostCode : {string} City: {string} Name: {string} PhoneNum: {string} e-mail: {string}")
    public void fillFormPage(String address, String postcode, String city, String name, String phoneNum, String email) {
        WebElement addressField = driver.findElement(By.id("iaddress"));
        addressField.clear();
        addressField.sendKeys(address);

        WebElement postCodeField = driver.findElement(By.id("ipostcode"));
        postCodeField.clear();
        postCodeField.sendKeys(postcode);

        WebElement cityField = driver.findElement(By.id("itown"));
        cityField.clear();
        cityField.sendKeys(city);

        WebElement nameField = driver.findElement(By.id("isurname"));
        nameField.clear();
        nameField.sendKeys(name);

        WebElement emailField = driver.findElement(By.id("iemail"));
        emailField.clear();
        emailField.sendKeys(email);

        WebElement phoneNumberField = driver.findElement(By.id("iphonenumber"));
        phoneNumberField.clear();
        phoneNumberField.sendKeys(phoneNum);
    }


    @Then("ensure a failure message {string} is displayed")
    public void ensureAFailureMessageExpected_failure_messageIsDisplayed(String expectedFundTransferFailureMessage) {
        Assert.assertEquals(driver.findElement(By.cssSelector(".notificationfeedbackwrapper")).getText(), expectedFundTransferFailureMessage);
    }


}