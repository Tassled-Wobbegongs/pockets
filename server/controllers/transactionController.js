const path = require('path');
const db = require('../models/transactionsModel')
const transactionController = {};

//MIDDLEWARE FOR RETRIEVING TRANSACTION DATA FOR FRONTEND DISPLAY
transactionController.getTransaction = (req, res, next) => {
    const getTransQuery = 
        'SELECT transactions.*, categories.category as category \
        FROM transactions \
        LEFT OUTER JOIN categories ON categories._id = transactions.category_id';

    db.query(getTransQuery)
        .then(data => {
            res.locals.data = data.rows;
            return next();
        })
        .catch(err => {
            console.log('get query error', err);
            return next(err);
        });
};

//MIDDLEWARE TO ADD A TRANSACTION TO DB
transactionController.addTransaction = (req, res, next) => {
    const addTransQuery = 
        'INSERT INTO public.transactions (name, amount, date, category_id) \
        VALUES ($1, $2, $3, $4) RETURNING *'; 
    const values = [
        req.body.name,
        req.body.amount,
        req.body.date,
        req.body.category_id
    ];

    db
        .query(addTransQuery, values)
        .then(data => {
            return next();
        })
        .catch( err => {
            console.log('query error', err);
            return next(err);
        });
};

//MIDDLEWARE FOR CALCULATING RUNNING TOTAL OF TRANSACTIONS
transactionController.getTotal = (req, res, next) => {
    const transactions = res.locals.data;
    let total = 0;
        
    transactions.forEach( obj => {
        total += parseFloat(obj.amount);
    })

    res.locals.total = total;
    return next();
};

//MIDDLEWARE FOR DELETING A TRANSACTION
transactionController.deleteTransaction = (req, res, next) => {
    const deleteQuery = 
        'DELETE FROM transactions \
        WHERE _id = $1';
    const params = [req.body.id];

    console.log('req', req.body);
    
    db
        .query(deleteQuery, params)
        .then(data => {
            return next();
        })
        .catch(err => {
            console.log('delete error', err);
            return next(err);
        });
};

transactionController.getBudget = (req, res, next) => {
	//res.locals.data should have all our transactions
	db.query('SELECT * FROM users WHERE users._id=$1', [req.params.id])
		.then( user => {
			console.log(user.rows);
			res.locals.user = user.rows;
			next();
		})
		.catch((err) => next(err));
};

transactionController.updateBudget = (req, res, next) => {
	//res.locals.data should have all our transactions
	db.query('UPDATE users SET budget= $1 WHERE users._id=$2', [req.body.budget, req.params.id])
		.then( user => {
			console.log('USER FROM UPDATEBUDGET MIDDLEWAR = ', user);
			res.locals.user = user;
			next();
		})
		.catch((err) => next(err));
};

module.exports = transactionController;