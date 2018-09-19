package gateway.resource.controller;

import gateway.resource.object.Change;
import gateway.resource.object.Message;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ResourceController {

  private String message = "Hello World!";
  private List<Change> changes = new ArrayList<>();

  @GetMapping("/")
  public Message home() {
    return new Message(message);
  }

  @PostMapping("/")
  public Message update(@RequestBody Message map, Principal principal) {
    if (map.getContent() != null) {
      message = map.getContent();
      changes.add(new Change(principal.getName(), message));
    }
    return new Message(message);
  }

  @GetMapping("/changes")
  public List<Change> changes() {
    return changes;
  }
}
