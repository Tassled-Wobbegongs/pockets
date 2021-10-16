const path = require('path');
const db = require('../models/transactionsModel')
const transactionController = {};

//middleware goes here to handle db queries


//MIDDLEWARE TO ADD A TRANSACTION TO DB
transactionController.addTransaction = (req, res, next) => {
    //req.body is going to contain transaction name, amount, and category
    const addTransQuery = `INSERT INTO public.transactions (name, amount, date, category_id) VALUES ($1, $2, $3, $4) RETURNING *`; 
    const values = [req.body.name, req.body.amount, req.body.date, req.body.category_id]
    // console.log(addTransQuery);
    // console.log(req.body);
    // console.log(values);

    db.query(addTransQuery, values)
        .then(data => {
            // console.log('rows:', data.rows);
            res.locals.data = data.rows; // might be data.rows
            return next();
        })
        .catch( err => {
            console.log('query error');
            return next(err);
        });
};








module.exports = transactionController;