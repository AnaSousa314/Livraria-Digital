var express = require('express');
var router = express.Router();

//const most = require('../data/most')

const {Theme} = require('../models');
const {Sale} = require('../models');
const {Book} = require('../models');
const {BookCart,sequelize} = require('../models');


/* GET home page. */
router.get('/', async function(req, res, next) {
  let themes = await Theme.findAll();

  let sales = await Book.findAll({
    attributes: ['title','imgPath','description','price','id'],
    include:[
      {
        model: Sale,
        required: true,
        attributes: ['percent']
      }
    ]
  });

  let mosts = await Book.findAll({
    attributes: ['title','imgPath','description','price','id'],
    where: {
      most: 1
    }
  })

 //console.log(mosts);


  res.render('index',{ user: req.session.user, themes,sales,mosts});
});

/* GET products page. */
/* coloquei em products.js */

/* coloquei em users.js */

router.get('/payment',async function(req,res,next){
  let user = req.session.user.id

  let data = await sequelize.query(`SELECT users.id,carts.id,carts.userId,carts.bookId,carts.total,carts.quantity, books.title, books.description, books.price,books.imgPath, bookcarts.cartId FROM carts INNER JOIN users ON (carts.userId = users.id and users.id = ${user}) INNER JOIN bookcarts ON (bookcarts.cartId = carts.id) INNER JOIN books ON (books.id = bookcarts.bookId);`,{type: sequelize.QueryTypes.SELECT});

console.log(user)

console.log(data)
  res.render('payment',{data,user: req.session.user})
});

/* router.get('/cart',function(req,res,next){
  res.render('cart',{user: req.session.user})
}); */

router.get('/concluded',function(req,res,next){

  let address = {name: req.body.name, cep: req.body.cep, street: req.body.street, number: req.body.number, complement: req.body.complement, reference:req.body.reference, district: req.body.district,city: req.body.city,state: req.body.state};

  console.log(address)


  res.render('concluded',{user: req.session.user})
});

module.exports = router;
