package uis.entornos.taller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.r2dbc.R2dbcAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = {R2dbcAutoConfiguration.class})
@EnableAutoConfiguration
@ComponentScan(basePackages = "uis.entornos.taller")
public class TallerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TallerApplication.class, args);
	}

}
