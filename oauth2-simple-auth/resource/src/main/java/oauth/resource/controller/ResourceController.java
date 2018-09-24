package oauth.resource.controller;

import oauth.resource.object.Message;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {

  @RequestMapping("/")
  public Message home() {
    return new Message("Hello World");
  }
}
