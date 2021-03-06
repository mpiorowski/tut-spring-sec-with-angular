package oauth.ui.config;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
@EnableOAuth2Sso
class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.logout()
        .logoutSuccessUrl("/")
        .and()
        .authorizeRequests()
        .antMatchers("/index.html", "/app.html", "/", "/home")
        .permitAll()
        .anyRequest()
        .authenticated()
        .and()
        .csrf()
        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
  }

  @Override
  public void configure(WebSecurity webSecurity) {
    webSecurity
        .ignoring()
        .antMatchers(
            "/resources/**",
            "/static/**",
            "/css/**",
            "/js/**",
            "/images/**",
            "/*.bundle.*",
            "/favicon.ico");
  }
}
