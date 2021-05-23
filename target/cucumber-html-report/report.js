$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Takeaway/features/Case_1.feature");
formatter.feature({
  "name": "Add any item from the restaurant menu into the basket (by clicking the item directly goes to the basket)",
  "description": "  https://www.thuisbezorgd.nl/en/",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Taco Solo. Adding meal by clicking over empty part of the box",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Taco solo restaurant from restaurant list",
  "keyword": "And "
});
formatter.step({
  "name": "Add Taco solo item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.step({
  "name": "fill Address: \u003caddress\u003e PostCode: \u003cpostcode\u003e City: \u003ccity\u003e Name: \u003cname\u003e PhoneNum: \u003cphoneNum\u003e e-mail: \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.step({
  "name": "Get the order reference number from latest page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "address",
        "postcode",
        "city",
        "name",
        "phoneNum",
        "email"
      ]
    },
    {
      "cells": [
        "\"main street 2415\"",
        "\"8888AA\"",
        "\"Enschede\"",
        "\"TestUSer\"",
        "\"1234567890\"",
        "\"testuser@test.test\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Takeaway test page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.takeawayPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Taco Solo. Adding meal by clicking over empty part of the box",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.typePostcodeIntoTheAddressField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectSuggestion(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.navigateToRestaurantsPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Taco solo restaurant from restaurant list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selecTacoSoloRestaurantFromRestaurantList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Taco solo item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.addTacoSoloItemFromTheRestaurantMenuIntoTheBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.pressTheOrderButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill Address: \"main street 2415\" PostCode: \"8888AA\" City: \"Enschede\" Name: \"TestUSer\" PhoneNum: \"1234567890\" e-mail: \"testuser@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillAddressPostCodeCityNamePhoneNumEMail(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillTheFormWithASAPDeliveryOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectThePaymentAmountFromTheComboBoxAtTheBottomOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnOrderAndPayButtonToFinishYourOrderProcess()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the order reference number from latest page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.getTheOrderReferenceNumberFromLatestPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Taco Solo.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Taco solo restaurant from restaurant list",
  "keyword": "And "
});
formatter.step({
  "name": "Add Taco solo item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.step({
  "name": "fill Address: \u003caddress\u003e PostCode: \u003cpostcode\u003e City: \u003ccity\u003e Name: \u003cname\u003e PhoneNum: \u003cphoneNum\u003e e-mail: \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.step({
  "name": "ensure a failure message \u003cexpected_failure_message\u003e is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "address",
        "postcode",
        "city",
        "name",
        "phoneNum",
        "email",
        "expected_failure_message"
      ]
    },
    {
      "cells": [
        "\"main street 2415\"",
        "\"8888AA\"",
        "\"Enschede\"",
        "\"TestUSer\"",
        "\"\"",
        "\"testuser@test.test\"",
        "\"Please fill out your Telephone Number .\""
      ]
    },
    {
      "cells": [
        "\"main street 2415\"",
        "\"8888AA\"",
        "\"Enschede\"",
        "\"\"",
        "\"1234567890\"",
        "\"testuser@test.test\"",
        "\"Please fill out your Name .\""
      ]
    },
    {
      "cells": [
        "\"main street 2415\"",
        "\"8888AA\"",
        "\"\"",
        "\"TestUSer\"",
        "\"1234567890\"",
        "\"testuser@test.test\"",
        "\"Please fill out your town .\""
      ]
    },
    {
      "cells": [
        "\"main street 2415\"",
        "\"\"",
        "\"Enschede\"",
        "\"TestUSer\"",
        "\"1234567890\"",
        "\"testuser@test.test\"",
        "\"Please fill out your Postcode .\""
      ]
    },
    {
      "cells": [
        "\"\"",
        "\"8888AA\"",
        "\"Enschede\"",
        "\"TestUSer\"",
        "\"1234567890\"",
        "\"testuser@test.test\"",
        "\"Please fill out your delivery address .\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Takeaway test page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.takeawayPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Taco Solo.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.typePostcodeIntoTheAddressField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectSuggestion(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.navigateToRestaurantsPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Taco solo restaurant from restaurant list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selecTacoSoloRestaurantFromRestaurantList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Taco solo item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.addTacoSoloItemFromTheRestaurantMenuIntoTheBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.pressTheOrderButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill Address: \"main street 2415\" PostCode: \"8888AA\" City: \"Enschede\" Name: \"TestUSer\" PhoneNum: \"\" e-mail: \"testuser@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillAddressPostCodeCityNamePhoneNumEMail(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillTheFormWithASAPDeliveryOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectThePaymentAmountFromTheComboBoxAtTheBottomOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnOrderAndPayButtonToFinishYourOrderProcess()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a failure message \"Please fill out your Telephone Number .\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ensureAFailureMessageExpected_failure_messageIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Takeaway test page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.takeawayPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Taco Solo.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.typePostcodeIntoTheAddressField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectSuggestion(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.navigateToRestaurantsPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Taco solo restaurant from restaurant list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selecTacoSoloRestaurantFromRestaurantList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Taco solo item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.addTacoSoloItemFromTheRestaurantMenuIntoTheBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.pressTheOrderButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill Address: \"main street 2415\" PostCode: \"8888AA\" City: \"Enschede\" Name: \"\" PhoneNum: \"1234567890\" e-mail: \"testuser@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillAddressPostCodeCityNamePhoneNumEMail(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillTheFormWithASAPDeliveryOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectThePaymentAmountFromTheComboBoxAtTheBottomOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnOrderAndPayButtonToFinishYourOrderProcess()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a failure message \"Please fill out your Name .\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ensureAFailureMessageExpected_failure_messageIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Takeaway test page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.takeawayPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Taco Solo.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.typePostcodeIntoTheAddressField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectSuggestion(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.navigateToRestaurantsPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Taco solo restaurant from restaurant list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selecTacoSoloRestaurantFromRestaurantList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Taco solo item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.addTacoSoloItemFromTheRestaurantMenuIntoTheBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.pressTheOrderButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill Address: \"main street 2415\" PostCode: \"8888AA\" City: \"\" Name: \"TestUSer\" PhoneNum: \"1234567890\" e-mail: \"testuser@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillAddressPostCodeCityNamePhoneNumEMail(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillTheFormWithASAPDeliveryOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectThePaymentAmountFromTheComboBoxAtTheBottomOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnOrderAndPayButtonToFinishYourOrderProcess()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a failure message \"Please fill out your town .\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ensureAFailureMessageExpected_failure_messageIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Takeaway test page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.takeawayPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Taco Solo.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.typePostcodeIntoTheAddressField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectSuggestion(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.navigateToRestaurantsPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Taco solo restaurant from restaurant list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selecTacoSoloRestaurantFromRestaurantList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Taco solo item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.addTacoSoloItemFromTheRestaurantMenuIntoTheBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.pressTheOrderButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill Address: \"main street 2415\" PostCode: \"\" City: \"Enschede\" Name: \"TestUSer\" PhoneNum: \"1234567890\" e-mail: \"testuser@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillAddressPostCodeCityNamePhoneNumEMail(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillTheFormWithASAPDeliveryOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectThePaymentAmountFromTheComboBoxAtTheBottomOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnOrderAndPayButtonToFinishYourOrderProcess()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a failure message \"Please fill out your Postcode .\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ensureAFailureMessageExpected_failure_messageIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Takeaway test page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.takeawayPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Taco Solo.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.typePostcodeIntoTheAddressField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectSuggestion(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.navigateToRestaurantsPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Taco solo restaurant from restaurant list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selecTacoSoloRestaurantFromRestaurantList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Taco solo item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.addTacoSoloItemFromTheRestaurantMenuIntoTheBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.pressTheOrderButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill Address: \"\" PostCode: \"8888AA\" City: \"Enschede\" Name: \"TestUSer\" PhoneNum: \"1234567890\" e-mail: \"testuser@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillAddressPostCodeCityNamePhoneNumEMail(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillTheFormWithASAPDeliveryOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectThePaymentAmountFromTheComboBoxAtTheBottomOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnOrderAndPayButtonToFinishYourOrderProcess()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a failure message \"Please fill out your delivery address .\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ensureAFailureMessageExpected_failure_messageIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/Takeaway/features/Case_2.feature");
formatter.feature({
  "name": "Add one menu from menu list (by clicking the item and adding more ingredients and than adding the menu to the basket)",
  "description": "  https://www.thuisbezorgd.nl/en/",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Takeaway test page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.takeawayPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Asselo test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.typePostcodeIntoTheAddressField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectSuggestion(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.navigateToRestaurantsPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Asello test restaurant from restaurant list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectAsseloTestRestaurantFromRestaurantList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add any Asselo test item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.addAnyItemFromTheRestaurantMenuIntoTheBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.pressTheOrderButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill Address: \"main street 2415\" PostCode: \"8888AA\" City: \"Enschede\" Name: \"TestUSer\" PhoneNum: \"1234567890\" e-mail: \"testuser@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillAddressPostCodeCityNamePhoneNumEMail(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillTheFormWithASAPDeliveryOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectThePaymentAmountFromTheComboBoxAtTheBottomOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnOrderAndPayButtonToFinishYourOrderProcess()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the order reference number from latest page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.getTheOrderReferenceNumberFromLatestPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Takeaway test page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.takeawayPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TEST Restaurant Selenium",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.typePostcodeIntoTheAddressField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectSuggestion(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.navigateToRestaurantsPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select TEST Restaurant Selenium restaurant from restaurant list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectTESTRestaurantSeleniumRestaurantFromRestaurantList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add any Restaurant Selenium item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.addAnyRestaurantSeleniumItemFromTheRestaurantMenuIntoTheBasket()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.cssSelector: .meal-add-btn-wrapper (tried for 25 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat Takeaway.Definitions.StepDefinitions.clickToMealAddBtn(StepDefinitions.java:189)\r\n\tat Takeaway.Definitions.StepDefinitions.addAnyRestaurantSeleniumItemFromTheRestaurantMenuIntoTheBasket(StepDefinitions.java:235)\r\n\tat ✽.Add any Restaurant Selenium item from the restaurant menu into the basket(src/test/java/Takeaway/features/Case_2.feature:28)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".meal-add-btn-wrapper\"}\n  (Session info: chrome\u003d90.0.4430.212)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MARIETAS\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Home\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:11093}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 66e8467ff549d9ee64b7a428153a9d12\n*** Element info: {Using\u003dcss selector, value\u003d.meal-add-btn-wrapper}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat Takeaway.Definitions.StepDefinitions.clickToMealAddBtn(StepDefinitions.java:189)\r\n\tat Takeaway.Definitions.StepDefinitions.addAnyRestaurantSeleniumItemFromTheRestaurantMenuIntoTheBasket(StepDefinitions.java:235)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.pressTheOrderButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "fill Address: \"main street 2415\" PostCode: \"8888AA\" City: \"Enschede\" Name: \"TestUSer\" PhoneNum: \"1234567890\" e-mail: \"testuser@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillAddressPostCodeCityNamePhoneNumEMail(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillTheFormWithASAPDeliveryOption()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectThePaymentAmountFromTheComboBoxAtTheBottomOfThePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnOrderAndPayButtonToFinishYourOrderProcess()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Get the order reference number from latest page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.getTheOrderReferenceNumberFromLatestPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Takeaway test page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.takeawayPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "RealPizza Test - adding two dishes",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "Type \"8888\" as a postcode into the address field",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.typePostcodeIntoTheAddressField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"8888 Alpha\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectSuggestion(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"restaurants\" page and Verify that restaurants has been listed at this address on the restaurant page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.navigateToRestaurantsPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select RealPizza Test restaurant from restaurant list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectRealPizzaTestRestaurantFromRestaurantList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add any RealPizza item from the restaurant menu into the basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.addAnyRealPizzaItemFromTheRestaurantMenuIntoTheBasket()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton class\u003d\"button-add-sidedish\" onclick\u003d\"pmButtonAddOne(\u0027productnumberO7NON00P11,basketproductnrspanO7NON00P11\u0027);updateBtnPrice($(\u0027#isidedishselectionformO7NON00P11 .sidedish-add-button\u0027), $(\u0027#isidedishpriceO7NON00P11\u0027).val(), \u0027O7NON00P11\u0027); return false;\"\u003e...\u003c/button\u003e is not clickable at point (231, 547). Other element would receive the click: \u003cspan class\u003d\"notranslate\" data-product-name\u003d\"...\"\u003ePizza Quattro Formaggi\u003c/span\u003e\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MARIETAS\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Home\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:11169}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 40f10eae2adecec231abd58e45d00597\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor3.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat Takeaway.Definitions.StepDefinitions.addAnyRealPizzaItemFromTheRestaurantMenuIntoTheBasket(StepDefinitions.java:257)\r\n\tat ✽.Add any RealPizza item from the restaurant menu into the basket(src/test/java/Takeaway/features/Case_2.feature:42)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Press the Order button and navigate to filling the address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.pressTheOrderButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "fill Address: \"main street 2415\" PostCode: \"8888AA\" City: \"Enschede\" Name: \"TestUSer\" PhoneNum: \"1234567890\" e-mail: \"testuser@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillAddressPostCodeCityNamePhoneNumEMail(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Fill the form with ASAP delivery option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.fillTheFormWithASAPDeliveryOption()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select the payment amount from the combo box at the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.selectThePaymentAmountFromTheComboBoxAtTheBottomOfThePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Order and Pay button to finish your order process",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnOrderAndPayButtonToFinishYourOrderProcess()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Get the order reference number from latest page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.getTheOrderReferenceNumberFromLatestPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});