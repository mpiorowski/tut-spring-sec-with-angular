package gateway.resource.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity httpSecurity) throws Exception {
    httpSecurity
//        .cors().disable()
//        .httpBasic().disable()
        .authorizeRequests().anyRequest().authenticated();
  }

//  bean used with no zuul implemetion
//  @Bean
//  HeaderHttpSessionIdResolver sessionIdResolver() {
//    return HeaderHttpSessionIdResolver.xAuthToken();
//  }
}
