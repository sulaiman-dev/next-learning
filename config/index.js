const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';
export const apisBasepath = dev ? 'http://localhost:3003/api/v1' : 'https://your_deployment.server.com';