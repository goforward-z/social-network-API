const router = require('express'). Router();

//importing controller functions
const {
    getAllUsers,
    getUserById,
    updateUser,
    createUser
} = require('../../controllers/user-controller');

// /api/users
router 
.route('/')
.get(getAllUsers)
.post(createUser);

//  /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser);


module.exports = router;