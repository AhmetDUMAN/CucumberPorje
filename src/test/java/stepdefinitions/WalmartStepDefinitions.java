package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.WalmartPage;

public class WalmartStepDefinitions {
    WalmartPage walmartPage = new WalmartPage();
    @Given("kullanici walmart aramakutusuna {string} yazar ve arar")
    public void kullanici_walmart_aramakutusuna_yazar_ve_arar(String string) {
       walmartPage.walmartAramaKutusu.sendKeys(string + Keys.ENTER);
    }

    @Then("kullanici walmart sonuc sayisinii ekrana yazdirir")
    public void kullanici_walmart_sonuc_sayisinii_ekrana_yazdirir() {
    String aramaSonucu= walmartPage.walmartAramaSonuc.getText();
        System.out.println(aramaSonucu);
    }
}
