const express = require('express');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { TOKEN_KEY } = require('../../helper/constants');

const authRoute = express.Router();

const { users_mock_data } = require('../../helper/read_write_mock_data');

// get file data to javascript object
let users = users_mock_data();

// check authorization
authRoute.get('/', function (req, res) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(authorization.replace('Bearer ', ''), TOKEN_KEY);
        return res.status(200).send(decoded);
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
});

// register a new user
authRoute.post(
    '/register',
    body('email').isEmail(),
    body('first_name').isLength({ min: 3 }),
    body('last_name').isLength({ min: 3 }),
    body('password').isLength({ min: 3 }),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        req.body.id = users.length + 1;
        users.push(req.body);
        // Create token
        const token = jwt.sign(
            { user: req.body },
            TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        req.body.token = token;
        res.json({ user: req.body, message: 'register successfully' });
    }
);

// login user
authRoute.post(
    '/login',
    body('email').isEmail(),
    body('password').isString(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const user = users.find(usr => usr.email === req.body.email);
        if (user && user.email === req.body.password) {
            // Create token
            const token = jwt.sign(
                { user: user },
                TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            // save user token
            user.token = token;
            return res.json({ user: user, message: 'login successful' });
        }
        return res.status(401).send("Unauthentication credentials");
    }
);

module.exports = { authRoute };
