//connecting routes to the server
const router = require('express').Router();
const userRoutes = require('./user-routes');


//add prefix

router.use('/users',userRoutes);


module.exports = router;