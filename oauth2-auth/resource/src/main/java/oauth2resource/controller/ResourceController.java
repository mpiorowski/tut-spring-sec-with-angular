package oauth2resource.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import oauth2resource.object.Message;

@RestController
public class ResourceController {

  @RequestMapping("/")
  public Message home() {
    return new Message("Hello World");
  }
}
