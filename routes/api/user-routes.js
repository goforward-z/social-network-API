const router = require('express'). Router();

//importing controller functions
const {
    getAllUsers,
    createUser
} = require('../../controllers/user-controller');

// /api/users
router 
.route('/')
.get(getAllUsers)
.post(createUser);



module.exports = router;