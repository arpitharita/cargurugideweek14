package com.carsguide.steps;
import com.carsguide.pages.UserCarSearch;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class usedsteps {

    @And("^I click user click$")
    public void iClickUserClick() {

        new UserCarSearch().ClickOnUsedCar();

    }

    @Then("^I navigate to a \"([^\"]*)\"$")
    public void iNavigateToA(String usedcar)
    {
        Assert.assertEquals(usedcar,new UserCarSearch().VerifyUsedCar());
    }
}
