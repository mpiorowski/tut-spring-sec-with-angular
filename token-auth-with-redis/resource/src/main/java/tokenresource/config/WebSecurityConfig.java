package tokenresource.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.session.web.http.HeaderHttpSessionIdResolver;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity httpSecurity) throws Exception {
    httpSecurity.cors().and().authorizeRequests().anyRequest().authenticated();
  }

  @Bean
  HeaderHttpSessionIdResolver sessionIdResolver() {
    return HeaderHttpSessionIdResolver.xAuthToken();
  }
}
