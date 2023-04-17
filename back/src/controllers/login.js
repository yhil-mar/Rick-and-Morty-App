const arr = require('../utils/users');

const login = (req, res) => {
    const { email, password } = req.query;
    if(email === arr[0].email && password === arr[0].password)
        res.status(200).json({access: true});
    else res.status(200).json({access: false});
};

module.exports = login;