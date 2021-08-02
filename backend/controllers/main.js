const User = require('../database/models/users/user.js')

const findAll = (req, res) => {
    User.findAll()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

module.exports = {findAll};
