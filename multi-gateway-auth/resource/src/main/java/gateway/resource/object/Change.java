package gateway.resource.object;

import java.util.Date;

public class Change {

  private Date timestamp = new Date();
  private String user;
  private String message;

  public Change(String user, String message) {
    this.user = user;
    this.message = message;
  }

  public Date getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(Date timestamp) {
    this.timestamp = timestamp;
  }

  public String getUser() {
    return user;
  }

  public void setUser(String user) {
    this.user = user;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
