package com.tweetapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@CrossOrigin(origins = "http://localhost:3000")
@OpenAPIDefinition
public class TweetAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TweetAppApplication.class, args);
	}

}
