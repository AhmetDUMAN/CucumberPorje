$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/walmart.feature");
formatter.feature({
  "name": "Walmart Urun Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC08_kullanici walmarta urun arar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"\u003curunler\u003e\" yazar ve arar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici walmart sonuc sayisinii ekrana yazdirir",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Verileri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "urunler"
      ]
    },
    {
      "cells": [
        "calculator"
      ]
    },
    {
      "cells": [
        "watch"
      ]
    },
    {
      "cells": [
        "flower"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC08_kullanici walmarta urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"calculator\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart sonuc sayisinii ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_sonuc_sayisinii_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC08_kullanici walmarta urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"watch\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart sonuc sayisinii ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_sonuc_sayisinii_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC08_kullanici walmarta urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"flower\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart sonuc sayisinii ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_sonuc_sayisinii_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});e",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    },
    {
      "name": "@urunarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazondaki dorpdownda \"Books\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazondaki_dorpdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"miserables\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/amazonsearch.feature");
formatter.feature({
  "name": "Amazon Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@urunarama"
    }
  ]
});
formatter.background({
  "name": "Oncesinde Calisacak Method (BeforeClass)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02_kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@urunarama"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.step({
  "name": "kullanici aramakutusuna headphones yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_headphones_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Oncesinde Calisacak Method (BeforeClass)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03_kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@urunarama"
    },
    {
      "name": "@amazoncamera"
    }
  ]
});
formatter.step({
  "name": "kullanici aramakutusuna camera yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_camera_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Oncesinde Calisacak Method (BeforeClass)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC04_kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@urunarama"
    },
    {
      "name": "@amazontv"
    }
  ]
});
formatter.step({
  "name": "kullanici aramakutusuna tv yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_tv_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/parametre.feature");
formatter.feature({
  "name": "Amazon Urun Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@urunarama1"
    },
    {
      "name": "@urunarama"
    }
  ]
});
formatter.scenario({
  "name": "TC04_kullanici amazonda urun aramasi yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@urunarama1"
    },
    {
      "name": "@urunarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"pencil\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});