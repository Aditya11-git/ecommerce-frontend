// src/environments/environment.ts
// export const environment = {
//   production: false,
//   usersAPIURL: 'https://harsha-ecommerce-api3.azure-api.net/gateway/users/',
//   productsAPIURL: 'https://harsha-ecommerce-api3.azure-api.net/gateway/products/',
//   ordersAPIURL: 'https://harsha-ecommerce-api3.azure-api.net/gateway/orders/',
//   gatewayURL: 'https://harsha-ecommerce-api3.azure-api.net/gateway/',
// };


// production: false,
//   usersAPIURL: 'http://localhost:4000/gateway/users/',
//   productsAPIURL: 'http://localhost:4000/gateway/products/',
//   ordersAPIURL: 'http://localhost:4000/gateway/orders/',
//   gatewayURL: 'http://localhost:4000/gateway/',


// src/environments/environment.ts
export const b2c = {
  tenantName: 'adityadotnetdevv',
  tenantId: 'dea1b23e-793c-446b-b6a4-641936005fc6',
  clientId: '39016999-05cc-4e94-b8a1-993a285f5c39',
  apiInstanceName: 'aditya-ecommerce-api'
};

const serverUrl = 'https://aditya-ecommerce-api.azure-api.net/';

export const environment = {
  production: false,
  usersAPIURL: `https://${b2c.apiInstanceName}.azure-api.net/gateway/users/`,
  productsAPIURL: `https://${b2c.apiInstanceName}.azure-api.net/gateway/products/`,
  ordersAPIURL: `https://${b2c.apiInstanceName}.azure-api.net/gateway/orders/`,
  gatewayURL: `https://${b2c.apiInstanceName}.azure-api.net/gateway/`,

  config: {
    env_name: 'dev',
    production: true,
    apiUrl: serverUrl,
    apiEndpoints: {
      userProfile:'user-profiles'
    },
    adb2cConfig: {
      clientId: b2c.clientId,
      scopeUrls:[
        `https://${b2c.tenantName}.onmicrosoft.com/ecommerce/access_as_user`
      ],
      apiEndpointUrls: [ 
        `${serverUrl}gateway/users`, 
        `${serverUrl}gateway/orders`,
        `${serverUrl}gateway/products`
      ],
      b2clogin: `${b2c.tenantName}.ciamlogin.com`,
      authorityDomain: `${b2c.tenantName}.onmicrosoft.com`,
      signUpUserFlow: 'SignUp_SignIn'
    }, 
    cacheTimeInMinutes: 30,
  }
};

