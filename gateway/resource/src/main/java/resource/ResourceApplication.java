package resource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import resource.object.Message;

@SpringBootApplication
@RestController
public class ResourceApplication {

  @RequestMapping("/")
  public Message home() {
    return new Message("Hello World!");
  }

  public static void main(String[] args) {
    SpringApplication.run(ResourceApplication.class, args);
  }

}
