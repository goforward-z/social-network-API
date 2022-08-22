//connecting routes to the server
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('')


//add prefix

router.use('/users',userRoutes);


module.exports = router;