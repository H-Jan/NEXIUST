const User = require('../../database/models/users/user.js')

const createUser = (req, res) => {
  console.log(req.body);
  newUser = req.body;
  User.create(newUser)
  .then(users => {
      res.status(200).send(users);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes."
      });
  });
};

const allUsers = (req, res) => {
  User.findAll()
  .then(users => {
      res.send(users);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes."
      });
  });
};

const getUser = (req, res) => {
  var id = req.query.username;
  User.findAll({ where: { username: id }})
  .then(users => {
    console.log(users)
    res.send(users);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieeing notes.'
    });
  });
}

const updateUser = (req, res) => {
  var body = req.query.body;
  var id = req.query.username;
  User.update(updatedUser, { where: { username: id }})
  .then(users => {
    res.send('successfull delete')
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occured while retrieving notes'
    })
  })
}


const deleteUser = (req, res) => {
  var id = req.query.username;
  User.destroy({ where: { username: id }})
  .then(users => {
    res.send('successfull delete')
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occured while retrieving notes'
    })
  })
}

module.exports = {
  createUser,
  allUsers,
  getUser,
  updateUser,
  deleteUser,
};
