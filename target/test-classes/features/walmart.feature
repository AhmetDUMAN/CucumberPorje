@walmart
Feature: Walmart Urun Arama
  Scenario Outline: TC08_kullanici walmarta urun arar
    Given kullanici "https://walmart.com" sayfasina gider
    And kullanici walmart aramakutusuna "<urunler>" yazar ve arar
    Then kullanici walmart sonuc sayisinii ekrana yazdirir
  Examples: Test Verileri
    |urunler|
    |calculator|
    |watch     |
    |flower    |