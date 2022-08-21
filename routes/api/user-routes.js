const router = require('express'). Router();

//importing controller functions
const {
    createUser
} = require('../../controllers/user-controller');

// /api/users
router 
.route('/')
.post(createUser);



module.exports = router;