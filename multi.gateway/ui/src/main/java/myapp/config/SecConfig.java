package myapp.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

public class SecConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .httpBasic().and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.NEVER).and()
            .authorizeRequests()
            .antMatchers("/index.html", "/app.html", "/").permitAll();
    }

}
