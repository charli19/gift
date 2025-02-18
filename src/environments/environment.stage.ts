export const environment = {
    production: true,
    baseUrl: 'https://plataforma.stage.mediadordigital.es',
    apiUrl: 'http://localhost:8085',
    authServerUrl: 'https://auth.stage.mediadordigital.es',
    logoutUrl: 'https://auth.stage.mediadordigital.es/logout',
    responseType: 'code',
    clientId: 'angular-mediator-client',
    clientSecret: 'angular-mediator-secret',
    grantType: 'authorization_code',
    redirectUri: 'https://plataforma.stage.mediadordigital.es/callback',
    authorizationEndpoint: '/oauth2/authorize',
    tokenEndpoint: '/oauth2/token',
    scope: 'openid'
};