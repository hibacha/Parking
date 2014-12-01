package com.nash.app;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.Test;


public class XpathAxis {
	Logger logger = LoggerFactory.getLogger(XpathAxis.class);
    @Test
    public void testXpath(){
    	WebDriver driver=new ChromeDriver();
        driver.get("http://localhost:8080/wodegrid/xpath.html");
        List<WebElement> elements = driver.findElements(By.cssSelector("tr:nth-child(1)"));
        
        List<WebElement> eles = driver.findElements(By.xpath("(//tr)[2]/preceding::tr"));
        logger.info("size:"+eles.size());
        for(WebElement element:eles){
        	String tagStr="<"+element.getTagName()+">"+element.getText()+"</"+element.getTagName()+">";
        	logger.info(tagStr);
        }
        driver.quit();
    }
    
}
