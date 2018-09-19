package gateway.resource.object;

import java.util.UUID;

public class Message {
  private String id = UUID.randomUUID().toString();
  private String content;

  Message() {
  }

  public Message(String content) {
    this.content = content;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }
}
