//connecting routes to the server
const router = require('express').Router();
const UserRoutes = require('./user-routes');


//add prefix

router.use('/users',UserRoutes);


module.exports = router;