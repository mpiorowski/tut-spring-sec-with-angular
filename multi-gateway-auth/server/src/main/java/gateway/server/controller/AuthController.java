package gateway.server.controller;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//@Controller
//public class AuthController {
//  Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//
//  @RequestMapping("")
//  public String ui() {
//    if (!(auth instanceof AnonymousAuthenticationToken)) {
//      /* The user is logged in :) */
//      return "forward:/ui";
//    }
//    return "forward:/login";
//  }
//}
