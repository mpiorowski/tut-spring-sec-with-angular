package myapp.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.gateway.mvc.ProxyExchange;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {

    @Value("${serverAddress}")
    private String serverAddress;

    @GetMapping("/resource")
    public ResponseEntity<?> proxy(ProxyExchange<byte[]> proxy, @RequestHeader("cookie") String cookie) {
        return proxy.uri("http://".concat(serverAddress).concat(":9000/"))
            .sensitive()
            .header("cookie", cookie)
            .get();
    }
}
