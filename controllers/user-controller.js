const { User } = require('../models');

const userController = {
    //get all users
    getAllUsers(req,res) {
        User.find({})
        .select('-__v')
        .sort({_id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    //get user by id
    getUserById({ params }, res ) {
        User.findOne ({_id: params.id})
        .select('-__v')
        //return if no suer is found
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found by this id!'});
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },
    //create a new user
    createUser ({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    //update user
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({_id: params.id},body,{ new: true, runValidators: true })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err))
    },
    //adding friend to friend list
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId }},
            { new: true, runValidators: true }
        )
        .populate({
            path: 'friends',
            select: ('-__v')
        })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(dbUserData);
            })
            .catch(err => res.json(err));
        
    },
    //delete a user
    deleteUser({ params }, res) {
        User.findOneAndDelete({_id:params.id})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err=> res.status(400).json(err));
    }
};

module.exports = userController;