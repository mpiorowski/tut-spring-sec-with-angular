package oauth2resource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@SpringBootApplication
@EnableResourceServer
public class Oauth2ResourceApp {

  public static void main(String[] args) {
    SpringApplication.run(Oauth2ResourceApp.class);
  }


}
