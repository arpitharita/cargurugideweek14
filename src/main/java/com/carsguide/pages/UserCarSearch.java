package com.carsguide.pages;
import com.carsguide.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UserCarSearch extends Utility {

    private static final Logger log = LogManager.getLogger(UserCarSearch.class.getName());

    public UserCarSearch() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='heading main-heading item-ad-wrapper ']/h1[1]")
    WebElement VerifyUserCar;

    @CacheLookup
    @FindBy(xpath = "//a[@href='/buy-a-car/used-car-search']")
    WebElement clickUsed;

    public String VerifyUsedCar()
    {
        return getTextFromElement(VerifyUserCar);

    }
    public void ClickOnUsedCar()
    {
        clickOnElement(clickUsed);
    }
}
