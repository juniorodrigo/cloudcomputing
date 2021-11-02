import express from 'express';



import universidad from '../components/universidad/network'
const router = express.Router();


router.use('/universidad', universidad)


// TO UPDATE


module.exports = router;
