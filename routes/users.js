const router = require('express').Router()
const usersController = require('../controllers/users.controller')
const createUserLimiter = require('../middleware/user-creation.limit')

// CREATE USERS, with rate limit middleware to avoid dos attacks
router.post('/', createUserLimiter,usersController.createUser)

// DELETE USERS FROM THE DB
router.delete('/:id', usersController.deleteUser)

//UPDATE
router.patch('/:id', usersController.updateUser)

// FETCH USERS FROM THE DB
router.get('/', usersController.readAllUsers)

module.exports = router;
