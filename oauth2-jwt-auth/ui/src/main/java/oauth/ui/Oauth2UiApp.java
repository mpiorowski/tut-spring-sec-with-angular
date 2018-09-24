package oauth.ui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;


@SpringBootApplication
@EnableZuulProxy
public class Oauth2UiApp {
  public static void main(String[] args) {
    SpringApplication.run(Oauth2UiApp.class);
  }
}
