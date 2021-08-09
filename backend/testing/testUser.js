const express = require('express');
const axios = require('axios');

const testingUser = {
  username: 'morris',
  email: 'adfeis@gmail.com',
  password: 'password',
  status: 1,
  type: 1,
  reference_id: '1129f34f930st',
}

axios.post('http://localhost:9999/api/users/createUser', {
    username: testingUser.username,
    email: testingUser.email,
    password: testingUser.password,
    status: testingUser.status,
    type: testingUser.type,
    reference_id: testingUser.reference_id,
  })
  .then(res => {
    console.log('successfully created a user')
  })
  .catch(err =>{
    console.log(err)
  })

axios.get('http://localhost:9999/api/users/findAll')
  .then(res => {
    var users = res.data;
    var lastUserPosition = users.length - 1;
    var lastUser = users[lastUserPosition];
    console.log(lastUser)
  })
  .catch(err => {
  })

var usereUsername = testingUser.username;

axios.get('http://localhost:9999/api/users/getUser', {
    params: {
      username: usereUsername,
    }
  })
  .then(res => {
    console.log('successfully grabbed user by username')
  }).catch(err => {
  })
