const router = require('express'). Router();

//importing controller functions
const {
    getAllUsers,
    getUserById,
    updateUser,
    createUser,
    deleteUser,
    addFriend,
    deleteFriend
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
.put(updateUser)
.delete(deleteUser);

// /api/:id/friends/:friendId
router
.route('/:id/friends/friendId')
.put(addFriend)
.delete(deleteFriend)


module.exports = router;