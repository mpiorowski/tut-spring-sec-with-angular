package gateway.server.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Autowired
  public void globalUserDetails(AuthenticationManagerBuilder builder) throws Exception {
    builder
      .inMemoryAuthentication()
      .withUser("user")
      .password(passwordEncoder().encode("pass"))
      .roles("USER")
      .and()
      .withUser("admin")
      .password(passwordEncoder().encode("pass"))
      .roles("ADMIN", "USER", "READER", "WRITER")
      .and()
      .withUser("audit")
      .password(passwordEncoder().encode("pass"))
      .roles("ADMIN", "READER", "USER");
  }

  @Override
  protected void configure(HttpSecurity httpSecurity) throws Exception {
    httpSecurity
        .httpBasic()
        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
        .and()
        .authorizeRequests()
        .antMatchers("/index.html", "/")
        .permitAll()
        .anyRequest()
        .authenticated()
        .and()
        .csrf()
        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
  }

  @Override
  public void configure(WebSecurity webSecurity) throws Exception {
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
