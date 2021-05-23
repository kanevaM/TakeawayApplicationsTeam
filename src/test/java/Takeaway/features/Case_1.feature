@test
Feature: Add any item from the restaurant menu into the basket (by clicking the item directly goes to the basket)
  https://www.thuisbezorgd.nl/en/

  Background:
    Given Takeaway test page

#positive
  Scenario Outline: Taco Solo. Adding meal by clicking over empty part of the box
    When Type "8888" as a postcode into the address field
    And Select "8888 Alpha"
    Then Navigate to "restaurants" page and Verify that restaurants has been listed at this address on the restaurant page
    And Select Taco solo restaurant from restaurant list
    And Add Taco solo item from the restaurant menu into the basket
    And Press the Order button and navigate to filling the address page
    And fill Address: <address> PostCode: <postcode> City: <city> Name: <name> PhoneNum: <phoneNum> e-mail: <email>
    And Fill the form with ASAP delivery option
    And Select the payment amount from the combo box at the bottom of the page
    And Click on Order and Pay button to finish your order process
    Then Get the order reference number from latest page

    Examples:
      | address            | postcode | city       | name       | phoneNum     | email                |
      | "main street 2415" | "8888AA" | "Enschede" | "TestUSer" | "1234567890" | "testuser@test.test" |



    #negative
  Scenario Outline: Taco Solo.
    When Type "8888" as a postcode into the address field
    And Select "8888 Alpha"
    Then Navigate to "restaurants" page and Verify that restaurants has been listed at this address on the restaurant page
    And Select Taco solo restaurant from restaurant list
    And Add Taco solo item from the restaurant menu into the basket
    And Press the Order button and navigate to filling the address page
    And fill Address: <address> PostCode: <postcode> City: <city> Name: <name> PhoneNum: <phoneNum> e-mail: <email>
    And Fill the form with ASAP delivery option
    And Select the payment amount from the combo box at the bottom of the page
    And Click on Order and Pay button to finish your order process
    Then ensure a failure message <expected_failure_message> is displayed

    Examples:
      | address            | postcode | city       | name       | phoneNum     | email                | expected_failure_message                  |
      | "main street 2415" | "8888AA" | "Enschede" | "TestUSer" | ""           | "testuser@test.test" | "Please fill out your Telephone Number ." |
      | "main street 2415" | "8888AA" | "Enschede" | ""         | "1234567890" | "testuser@test.test" | "Please fill out your Name ."             |
      | "main street 2415" | "8888AA" | ""         | "TestUSer" | "1234567890" | "testuser@test.test" | "Please fill out your town ."             |
      | "main street 2415" | ""       | "Enschede" | "TestUSer" | "1234567890" | "testuser@test.test" | "Please fill out your Postcode ."         |
      | ""                 | "8888AA" | "Enschede" | "TestUSer" | "1234567890" | "testuser@test.test" | "Please fill out your delivery address ." |
