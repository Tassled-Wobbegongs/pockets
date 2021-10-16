const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');




//for displaying totals for transactions/summary data
router.get('/', (req, res) => {

});

//on 'submit' add transaction to database
router.post('/', (req, res) => {
    
});

//on 'edit', find and update an existing transaction 
router.update('/', (req, res) => {

});

//on 'delete' find and delte an existing transaction
router.delete('/', (req, res) => {

});


module.exports = router;