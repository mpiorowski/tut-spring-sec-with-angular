package resource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import resource.object.Message;

@SpringBootApplication
@RestController
public class ResourceApplication extends WebSecurityConfigurerAdapter {

  @GetMapping("/")
  public Message home() {
    return new Message("Hello World!");
  }

  public static void main(String[] args) {
    SpringApplication.run(ResourceApplication.class, args);
  }

}
