package io.swagger;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class microservicioNegocio {

    public static void main(String[] args) throws Exception {
        new SpringApplication(microservicioNegocio.class).run(args);
    }
}
