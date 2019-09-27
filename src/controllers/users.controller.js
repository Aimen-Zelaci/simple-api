const debug = require('logzio-node-debug').debug('APi:' + require('path').basename(__filename))
const pool  = require('../db/mysql-db.manager')

class UsersController {
     createUser(req, res){
        debug('Creating user ...', req.body)
        const {id, lastName, firstName, address, city} = req.body
        // THIS IS THE SCHEMA I SET UP IN MY LOCAL DB. YOU CAN CHANGE YOUR SCHEMA :-).
        const user ={
            personID:id, //PRIMARY KEY NOT NULL UNIQUE
            LastName:lastName, //VARCHAR(10) NOT NULL UNIQUE
            FirstName:firstName, //VARCHAR(10) NOT NULL UNIQUE
            Address:address, //VARCHAR(255) NOT NULL UNIQUE
            City:city //VARCHAR(255) NOT NULL UNIQUE
        }
        const query = 'INSERT INTO users SET ?'
        resolveQuery(query, user, req, res)
        debug('User created - OK')
    }
     readAllUsers(req, res){
        debug('Fetching users')
         const query = 'SELECT * FROM users'
         resolveQuery(query, null, req, res)
     }
     updateUser(req, res){
         const {newLastName, newFirstName, newCity, newAddress} = req.body
         const query = `UPDATE users SET LastName = ?, 
            FirstName = ?, 
            Address = ?, 
            City = ? 
            WHERE personID = ?`
         const {id} = req.params
         const data = [newLastName, newFirstName, newCity, newAddress, id]
         resolveQuery(query, data, req, res)

     }
     deleteUser(req, res){
         const {id} = req.params
         const query = 'DELETE FROM users WHERE personID = ?'
         debug('Deleting user id: ', id)
         resolveQuery(query, [id], req, res)
         debug('User deleted - id : ', id)
    }
}

function resolveQuery(query, data, req, res){
    const db = pool.connect();
    db.getConnection(function(err, connection) {
        if (err) throw err // not connected!
        // Use the connection
        connection.query(query, data, function (error, results) {
            res.status(200).json(results)
            // When done with the connection, release it.
            console.table(results)
            connection.release()
            // Handle error after the release.
            if (error) throw error
        })
    })
}
module.exports =  new UsersController();
