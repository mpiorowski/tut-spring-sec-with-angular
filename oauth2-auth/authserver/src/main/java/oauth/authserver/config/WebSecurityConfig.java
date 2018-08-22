package oauth.authserver.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.httpBasic().and().authorizeRequests().anyRequest().authenticated();
  }

  //  @Bean
  //  protected OAuth2RestTemplate oAuth2RestTemplate(
  //      OAuth2ProtectedResourceDetails resourceDetails, OAuth2ClientContext clientContext
  //  ) {
  //    return new OAuth2RestTemplate(resourceDetails, clientContext);
  //  }
}
