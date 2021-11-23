// The Next.js config file defines global config variables that are available to
// components in the Next.js app. It supports setting different values for variables 
// based on environment (e.g. development vs production).

module.exports = {
  reactStrictMode: true,
  // already done on backend side
  // serverRuntimeConfig: {
  //   secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
// },
    publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3003/api/v1' // development api
          : 'http://localhost:3000/api' // production api
    }
}
