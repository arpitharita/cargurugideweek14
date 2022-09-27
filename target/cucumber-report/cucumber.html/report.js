$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "\r\nAs user I want to search car",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"\u003cmake\u003e\" in results.",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "NSW - Central Coast",
        "$40,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "NSW - Hunter",
        "$42,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Holden",
        "Barina",
        "NSW - Hunter",
        "$25,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover",
        "NSW - Central Coast",
        "$200,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Kia",
        "Rio",
        "NT - South",
        "$60,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Hyundai",
        "Getz",
        "NSW - Riverina",
        "$35,000"
      ],
      "line": 24,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13849531600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Honda\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 126812700,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 5252111100,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 6123511400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 457332200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1238911900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1217071200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1220612400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1255175200,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 8744275700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 491476100,
  "status": "passed"
});
formatter.after({
  "duration": 197000,
  "status": "passed"
});
formatter.before({
  "duration": 11298552400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Compass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$42,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Jeep\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 75500,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 5390674300,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 3913691400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 359570200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1236641000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compass",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1203005400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1194617200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$42,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 20217410800,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with text: $42,000\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-7KBRRGO\u0027, ip: \u0027192.168.0.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat com.carsguide.utilities.Utility.selectByVisibleTextFromDropDown(Utility.java:148)\r\n\tat com.carsguide.pages.CarSearch.SelectPrice(CarSearch.java:77)\r\n\tat com.carsguide.steps.buysteps.iSelectPrice(buysteps.java:51)\r\n\tat ✽.And I select price \"$42,000\"(src/test/java/resources/featurefile/buy.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1092991700,
  "status": "passed"
});
formatter.before({
  "duration": 7044974200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Holden\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Barina\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$25,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Holden\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 211973800,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 2694412500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 106620500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Holden",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1360069100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Barina",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1144355900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1159294300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1189844400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3879772200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Holden",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 319915200,
  "status": "passed"
});
formatter.after({
  "duration": 60900,
  "status": "passed"
});
formatter.before({
  "duration": 5067127800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Range Rover\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$200,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Land Rover\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1172373300,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 373505500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 1562685100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 3529188500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Range Rover",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1158385000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1116775400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$200,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1141309100,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3102359700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 469360900,
  "status": "passed"
});
formatter.after({
  "duration": 40000,
  "status": "passed"
});
formatter.before({
  "duration": 5947705300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Rio\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NT - South\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Kia\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 261880200,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 3575575900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 379559000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1149255500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rio",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1169181500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - South",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1103130800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1113617800,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3487350500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 272287900,
  "status": "passed"
});
formatter.after({
  "duration": 26300,
  "status": "passed"
});
formatter.before({
  "duration": 7479847200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search car link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Getz\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Riverina\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Hyundai\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 241023100,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickSearchCarLink()"
});
formatter.result({
  "duration": 310097200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buysteps.iNavigateTo(String)"
});
formatter.result({
  "duration": 3392788000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1231104000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Getz",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1141989900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Riverina",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1165455300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$35,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1142750200,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2744133900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 630629800,
  "status": "passed"
});
formatter.after({
  "duration": 50900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"\u003cmake\u003e\" in results.",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Mazda",
        "2",
        "NSW - Hunter",
        "$20,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Ford",
        "Ecosport",
        "VIC - Melbourne",
        "$90,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Ford",
        "Fiesta",
        "WA - Perth",
        "$200,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Honda",
        "Accord",
        "NSW - Sydney",
        "$80,000"
      ],
      "line": 43,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Audi",
        "Q5",
        "NSW - Sydney",
        "$150,000"
      ],
      "line": 44,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Kia",
        "Niro",
        "NSW - Sydney",
        "$80,000"
      ],
      "line": 45,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8587955400,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Mazda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Mazda\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 206344700,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 3727254100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 114783200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1199391300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1171585100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1147342500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1126391000,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4033213500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 377737600,
  "status": "passed"
});
formatter.after({
  "duration": 26300,
  "status": "passed"
});
formatter.before({
  "duration": 9603887400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Ecosport\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"VIC - Melbourne\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Ford\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 184772700,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 4177512200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 431829300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1228891200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ecosport",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1157658200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Melbourne",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1138705600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1175757400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4725883000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 56382700,
  "status": "passed"
});
formatter.after({
  "duration": 42000,
  "status": "passed"
});
formatter.before({
  "duration": 9204259900,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Fiesta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"WA - Perth\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$200,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Ford\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 49300,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 331558700,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 336493100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 3949301700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1201481300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fiesta",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1189040100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - Perth",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1160007200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$200,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1181695600,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6801984600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 96701500,
  "status": "passed"
});
formatter.after({
  "duration": 46200,
  "status": "passed"
});
formatter.before({
  "duration": 16279158200,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Accord\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Honda\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 58900,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 589140200,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 413277800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 2852823000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1655850400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accord",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1170682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1190412100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1180700700,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6476285400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 66896100,
  "status": "passed"
});
formatter.after({
  "duration": 43700,
  "status": "passed"
});
formatter.before({
  "duration": 10685830600,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Q5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$150,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Audi\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1009709200,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 548589700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 3764295300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1803872600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q5",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1278942500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1205240100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1208478700,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 7054257400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 91301800,
  "status": "passed"
});
formatter.after({
  "duration": 68700,
  "status": "passed"
});
formatter.before({
  "duration": 11699145300,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click user click",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to a \"Used Cars For Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Niro\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Kia\" in results.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 819093500,
  "status": "passed"
});
formatter.match({
  "location": "usedsteps.iClickUserClick()"
});
formatter.result({
  "duration": 463519600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 17
    }
  ],
  "location": "usedsteps.iNavigateToA(String)"
});
formatter.result({
  "duration": 3209174800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "buysteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1840938400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Niro",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1299159900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "buysteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1226662800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "buysteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 1237451300,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5027967100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "buysteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 102299300,
  "status": "passed"
});
formatter.after({
  "duration": 40500,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify Functionality",
  "description": "\r\nAs user I want to find dealers list",
  "id": "find-the-dealers-and-verify-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"\u003cKeywords\u003e\" are display on page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;",
  "rows": [
    {
      "cells": [
        "Keywords"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;2"
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 16,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;3"
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 17,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;4"
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 18,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;5"
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 19,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;6"
    },
    {
      "cells": [
        "ANDREA MOTORI SERVICE"
      ],
      "line": 20,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;7"
    },
    {
      "cells": [
        "Oxford Motors"
      ],
      "line": 21,
      "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12220998200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 112600,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 834892200,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 3721356500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 59279900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 332857800,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 568711600,
  "status": "passed"
});
formatter.after({
  "duration": 96200,
  "status": "passed"
});
formatter.before({
  "duration": 11169291100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"4WD Specialist Group\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 59400,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 224988900,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 870734600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 1155134000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4WD Specialist Group",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 2322428500,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 416219800,
  "status": "passed"
});
formatter.after({
  "duration": 43000,
  "status": "passed"
});
formatter.before({
  "duration": 13062970200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"5 Star Auto\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39500,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1299513300,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 461991100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 1019277200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Star Auto",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 2862156500,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 498927300,
  "status": "passed"
});
formatter.after({
  "duration": 101800,
  "status": "passed"
});
formatter.before({
  "duration": 15188723800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"A \u0026 M Car Sales Pty Ltd\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 2058700,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1426899700,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 541774300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 1657851400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A \u0026 M Car Sales Pty Ltd",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 3113673400,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 816288800,
  "status": "passed"
});
formatter.after({
  "duration": 611700,
  "status": "passed"
});
formatter.before({
  "duration": 15540348200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"A1 MOTORS COMPANY\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 278376400,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 5502263600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 97659400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1 MOTORS COMPANY",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 413957200,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 1770871900,
  "status": "passed"
});
formatter.after({
  "duration": 164400,
  "status": "passed"
});
formatter.before({
  "duration": 12344061500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"ANDREA MOTORI SERVICE\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 58500,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 920406100,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 382111900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 1231102500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ANDREA MOTORI SERVICE",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 2668326400,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 960652800,
  "status": "passed"
});
formatter.after({
  "duration": 130700,
  "status": "passed"
});
formatter.before({
  "duration": 16355712600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify-functionality;find-the-dealers-and-verify-the-dealers-are-in-list;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click find a dealer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to a to \"Find a Car Dealership Near You\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the dealer names \"Oxford Motors\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 337600,
  "status": "passed"
});
formatter.match({
  "location": "buysteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 681545100,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickFindADealer()"
});
formatter.result({
  "duration": 656853300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Car Dealership Near You",
      "offset": 20
    }
  ],
  "location": "finddealersteps.iNavigateToATo(String)"
});
formatter.result({
  "duration": 1340037600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford Motors",
      "offset": 31
    }
  ],
  "location": "finddealersteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 4220681900,
  "status": "passed"
});
formatter.match({
  "location": "finddealersteps.iClickOnFindButton()"
});
formatter.result({
  "duration": 5515880800,
  "status": "passed"
});
formatter.after({
  "duration": 291700,
  "status": "passed"
});
});