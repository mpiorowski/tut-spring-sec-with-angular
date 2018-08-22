package oauth2ui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
public class Oauth2UiApp {
  public static void main(String[] args) {
    SpringApplication.run(Oauth2UiApp.class);
  }
}
