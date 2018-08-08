package tokenresource.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tokenresource.object.Message;

@RestController
public class ResourceController {

  @RequestMapping("/")
//  @CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = {"x-auth-token", "x-requested-with", "x-xsrf-token"})
  public Message home() {
    return new Message("Hello World");
  }
}
