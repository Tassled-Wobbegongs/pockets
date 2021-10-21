const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

//for displaying totals for transactions/summary data
router.get('/', 
    transactionController.getTransaction,
    transactionController.getTotal,
    (req, res) => {
        return res
            .status(200)
            .json({
                data: res.locals.data,
                total: res.locals.total
            });
});

//on 'submit' add transaction to database
router.post('/',
    transactionController.addTransaction,
    transactionController.getTransaction,
    transactionController.getTotal,
    (req, res) => {
        return res
            .status(201)
            .json({ 
                data: res.locals.data,
                total: res.locals.total
            });
});

//on 'edit', find and update an existing transaction 
// router.update('/', (req, res) => {

// });

//on 'delete' find and delete an existing transaction
router.delete('/', 
    transactionController.deleteTransaction,
    transactionController.getTransaction,
    (req, res) => {
        return res.sendStatus(200);
});


module.exports = router;