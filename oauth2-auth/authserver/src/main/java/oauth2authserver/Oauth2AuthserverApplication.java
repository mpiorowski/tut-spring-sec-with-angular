package oauth2authserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableAuthorizationServer
@EnableResourceServer
public class Oauth2AuthserverApplication implements WebMvcConfigurer {

  public static void main(String[] args) {
    SpringApplication.run(Oauth2AuthserverApplication.class, args);
  }
}
