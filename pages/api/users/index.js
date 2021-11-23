// The users index handler receives HTTP requests sent to the base users route 
// /api/users. It supports HTTP GET requests which are mapped to the getUsers() 
// method, which returns all users without their password property. Security for
//  this and all other routes in the API is handled by the global JWT middleware.

import { apiHandler } from 'helpers/api';

// users in JSON file for simplicity, store in a db for production applications
const users = require('data/users.json');

export default apiHandler(handler);

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getUsers();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getUsers() {
        // return users without passwords in the response
        const response = users.map(user => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });
        return res.status(200).json(response);
    }
}