const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');



//for displaying totals for transactions/summary data
router.get('/transactions', transactionController.getTransaction, transactionController.getTotal, (req, res) => {
    // console.log(res.locals);
    res.status(200).json({ data: res.locals.data, total: res.locals.total});

    // getting error: Express error handler caught unknown middleware error
    // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // maybe because res.locals needs to be an array, but getting an object right now

});

//on 'submit' add transaction to database
router.post('/transactions', transactionController.addTransaction, transactionController.getTransaction, transactionController.getTotal, (req, res) => {
    return res.status(201).json({ data: res.locals.data, total: res.locals.total});
});

//on 'edit', find and update an existing transaction 
// router.update('/', (req, res) => {

// });

//on 'delete' find and delete an existing transaction
router.delete('/transactions', 
	transactionController.deleteTransaction,
	transactionController.getTransaction,
	(req, res) => {
			return res.sendStatus(200)
});

router.get('/users/:id',
	transactionController.getBudget,
	(req, res) => {
		return res.status(200).json(res.locals.user);
	}
);

router.put('/users/:id',
	transactionController.updateBudget,
	(req, res) => {
		return res.status(200).json(res.locals.user);
	}
);

module.exports = router;