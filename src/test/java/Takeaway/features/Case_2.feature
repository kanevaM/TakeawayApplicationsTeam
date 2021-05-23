@test
Feature: Add one menu from menu list (by clicking the item and adding more ingredients and than adding the menu to the basket)
  https://www.thuisbezorgd.nl/en/

  Background:
    Given Takeaway test page


  Scenario: Asselo test
    When Type "8888" as a postcode into the address field
    And Select "8888 Alpha"
    Then Navigate to "restaurants" page and Verify that restaurants has been listed at this address on the restaurant page
    And Select Asello test restaurant from restaurant list
    And Add any Asselo test item from the restaurant menu into the basket
    And Press the Order button and navigate to filling the address page
    And fill Address: "main street 2415" PostCode: "8888AA" City: "Enschede" Name: "TestUSer" PhoneNum: "1234567890" e-mail: "testuser@test.test"
    And Fill the form with ASAP delivery option
    And Select the payment amount from the combo box at the bottom of the page
    And Click on Order and Pay button to finish your order process
    Then Get the order reference number from latest page

# bug ID TA1 Not supported delivery area
  Scenario: TEST Restaurant Selenium
    When Type "8888" as a postcode into the address field
    And Select "8888 Alpha"
    Then Navigate to "restaurants" page and Verify that restaurants has been listed at this address on the restaurant page
    And Select TEST Restaurant Selenium restaurant from restaurant list
    And Add any Restaurant Selenium item from the restaurant menu into the basket
    And Press the Order button and navigate to filling the address page
    And fill Address: "main street 2415" PostCode: "8888AA" City: "Enschede" Name: "TestUSer" PhoneNum: "1234567890" e-mail: "testuser@test.test"
    And Fill the form with ASAP delivery option
    And Select the payment amount from the combo box at the bottom of the page
    And Click on Order and Pay button to finish your order process
    Then Get the order reference number from latest page


  Scenario: RealPizza Test - adding two dishes
    When Type "8888" as a postcode into the address field
    And Select "8888 Alpha"
    Then Navigate to "restaurants" page and Verify that restaurants has been listed at this address on the restaurant page
    And Select RealPizza Test restaurant from restaurant list
    And Add any RealPizza item from the restaurant menu into the basket
    And Press the Order button and navigate to filling the address page
    And fill Address: "main street 2415" PostCode: "8888AA" City: "Enschede" Name: "TestUSer" PhoneNum: "1234567890" e-mail: "testuser@test.test"
    And Fill the form with ASAP delivery option
    And Select the payment amount from the combo box at the bottom of the page
    And Click on Order and Pay button to finish your order process
    Then Get the order reference number from latest page



