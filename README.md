# TakeawayApplicationsTeam

### Tools and Frameworks (preconditions) 
Install JDK 8+ <br>
Install Maven 3+ <br>
Install Intelij Plugins: Cucumber for Java, Gherkin

### WebDrivers (preconditions)
Download latest chrome and firefox driver and place it at "C:\\webdrivers\\" <br>
Full path should be: <br> "C:\\webdrivers\\chromedriver.exe" <br> "C:\\webdrivers\\geckodriver.exe"

### Build With
Java <br>
Cucumber for Java <br>
WebDriver <br>
JUnit <br>
TestNG <br>
Maven

### Test Account (Here are the scenarios to automate)
#### Case 1:
1. Open https://www.thuisbezorgd.nl/en/ with your favorite browser
2. Type 8888 as a postcode into the address field
3. Select 8888-alpha
4. Navigate to restaurants page
5. Verify that restaurants has been listed at this address on the restaurant page
6. Select ……………………………………. test restaurant from restaurant list
7. Add any item from the restaurant menu into the basket
8. Press the Order button and navigate to filling the address page (for address info look at below)
9. Fill the form with ASAP delivery option
10. Select the payment amount from the combo box at the bottom of the page (Please select the closest amount to order price. Example: if the order price is 11 Euro and if there the closest option on combo box 13 Euro then select 13 Euro)
11. Click on Order and Pay button to finish your order process
12. Get the order reference number from latest page
Address : main street 2415 <br>
PostCode : 8888AA <br>
City : Enschede <br>
Name :TestUSer <br>
PhoneNum :1234567890 <br>
e-mail :testuser@test.test <br>

#### Case 2:
(This case do note have the same complexity as the top one)
1. Open https://www.thuisbezorgd.nl/en/ with your favorite browser
2. Type 8888 as an address
3. Select 8888-alpha
4. Navigate to restaurants page
5. Select ……………………………………. test restaurant from restaurant list
6. Add one menu from menu list
7. Press the Order button and navigate to form page
8. Fill the form with ASAP option
9. Click on Order and Pay button to finish order your process
10. Get the order reference number from latest page

#### Executing Tests
Place the caret at the test class to run all tests in that class, or at the test method, and press Ctrl+Shift+F10. <br>
Alternatively, click the the Run button gutter icon next to the test class or test method.

When the tests finish running, the results are displayed on the Test Runner tab of the Run tool window.<br> 
On this tab, you can rerun tests, export and import test results, see how much time it took to run each test, and so on. 
