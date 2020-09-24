package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class EbayPage {
    public EbayPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy (xpath = "//input[@placeholder='Herhangi bir şey arayın']")
    public WebElement ebayAramaKutusu;
    @FindBy (className = "srp-controls__count-heading")
    public WebElement ebayAramaSonucSayisi;
}
