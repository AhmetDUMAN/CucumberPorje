@birdenfazlaexample @urunarama
Feature: Amazonda Urun Arama
  Scenario Outline: TC07_kullanici amazonda dropdown ve aramakutusunu kullanarak arama yapar
    Given kullanici "https://amazon.com" sayfasina gider
    And kullanici amazondaki dorpdownda "<kategori>" secer
    And kullanici aramakutusuna "<urunismi>" yazar ve arar
    Then kullanici sonuc sayisini ekrana yazdirir

    Examples: Test Verileri
      | kategori      | urunismi     |
      |Automotive     |phone holder  |
      |Baby           |stroller      |
      |Books          |miserables    |