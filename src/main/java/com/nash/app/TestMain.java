package com.nash.app;

import com.gargoylesoftware.htmlunit.util.StringUtils;

public class TestMain {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
        String a="$abc";
        String b= a.replace("$", "");
        System.out.println(b);
        
        Double o=90.0;
        Double o2=90.0;
        System.out.println(o==o2);
        
        String ma=new String("a");
        String mb=new String("a");
        System.out.println(ma==mb);
        String origin = new String("fatherandmother");
        String subString  = origin.substring(2, 3);
        char c=subString.charAt(0);
        char achar=97;
        
        System.out.println(org.apache.commons.lang3.StringUtils
				.repeat("cha", 2));
        String testString="a";
        Integer testInt=1;
	}

}
