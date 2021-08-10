const express = require('express');
const axios = require('axios');

// axios.post('http://localhost:9999/api/users/createUser', {
//     username: testingUser.username,
//     email: testingUser.email,
//     password: testingUser.password,
//     status: testingUser.status,
//     type: testingUser.type,
//     reference_id: testingUser.reference_id,
//   })
//   .then(res => {
//     console.log('successfully created a user')
//   })
//   .catch(err =>{
//     console.log(err)
//   })
//
// axios.get('http://localhost:9999/api/users/findAll')
//   .then(res => {
//     var users = res.data;
//     var lastUserPosition = users.length - 1;
//     var lastUser = users[lastUserPosition];
//     console.log(lastUser)
//   })
//   .catch(err => {
//   })
//
// var usereUsername = testingUser.username;
//
// axios.get('http://localhost:9999/api/users/getUser', {
//     params: {
//       username: usereUsername,
//     }
//   })
//   .then(res => {
//     console.log('successfully grabbed user by username')
//   }).catch(err => {
//   })
//
// axios.put('http://localhost:9999/api/users/updateUser', {
//     originUsername: 'hello',
//     username: 'world',
//     email: 'world@gmail.com',
//     password: 'password',
//     status: 1,
//     type: 1,
//     reference_id: '1129f34f930st',
//   })
//   .then(res => {
//     console.log('succesfully updated user')
//   })
//   .catch(err => {
//     console.log(err)
//   })

// axios.delete('http://localhost:9999/api/users/deleteUser', {
//     params: {
//       username: 'mromar'
//     }
//   })
//   .then(res => {
//     console.log('succesfully deleted user')
//   })
//   .catch(err => {
//     console.log(err)
//   })
