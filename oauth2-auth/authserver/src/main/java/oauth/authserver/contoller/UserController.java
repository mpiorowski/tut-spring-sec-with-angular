package oauth.authserver.contoller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController
{
  @RequestMapping("/user")
  @ResponseBody
  public Principal user(Principal user) {
    return user;
  }
}
