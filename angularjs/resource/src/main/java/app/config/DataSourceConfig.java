package app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.oauth2.provider.token.RemoteTokenServices;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;

import javax.sql.DataSource;

public class DataSourceConfig {

  @Autowired
  private Environment env;

  @Bean
  public DataSource dataSource() {
    DriverManagerDataSource dataSource = new DriverManagerDataSource();
    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
    dataSource.setUrl("jdbc:mysql://localhost:3306/spring.oauth2");
    dataSource.setUsername("root");
    dataSource.setPassword("mysql");
    return dataSource;
  }

  @Bean
  public TokenStore tokenStore() {
    return new JdbcTokenStore(dataSource());
  }

  @Primary
  @Bean
  public RemoteTokenServices tokenService() {
    RemoteTokenServices tokenService = new RemoteTokenServices();
    tokenService.setCheckTokenEndpointUrl(
        "http://localhost:8080/spring-security-oauth-app/oauth/check_token");
    tokenService.setClientId("fooClientIdPassword");
    tokenService.setClientSecret("secret");
    return tokenService;
  }

}
