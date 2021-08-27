
const {Cart, sequelize} = require('../models');
const {Book} = require('../models');
const {BookCart} = require('../models')

module.exports = {
  async cart(req,res,next){

    // let data = await BookCart.findAll({
    //   attributes: ['cartId','bookId'],
    //   include:[
    //    {model: Book, attributes:['title','imgPath','price','id']},
    //    {model: Cart,attributes:['quantity','total','userId'],where:{userId: req.params.id}}
    //   ],
    // });

    console.log(req.session.user.id)
    let data = await sequelize.query(`SELECT users.id,carts.id,carts.userId,carts.bookId,carts.total,carts.quantity, books.title, books.description, books.price,books.imgPath, bookcarts.cartId FROM carts INNER JOIN users ON (carts.userId = users.id and users.id = ${req.params.id}) INNER JOIN bookcarts ON (bookcarts.cartId = carts.id) INNER JOIN books ON (books.id = bookcarts.bookId);`,{type: sequelize.QueryTypes.SELECT});

    /* let cart = Cart.findAll({
      attributes: ['id','userId','bookId','quantity','total'],
      include:[
        {
          model: Book,
          attributes:['title','imgPath','price','id']
        }
      ]
    })
    let cartss = JSON.stringify(cart)*/
    console.log(data) 

    //res.status(200).json(cart)
    res.render('cart',{data, user: req.session.user})
  },
  
  async create(req,res,next){
      let bookid = req.params.bookid;
    
      let total = req.params.total;
      let teste = '';

      console.log(bookid)
      //console.log(userid)

      let cart = {bookId: bookid, userId: req.session.user.id, total: total, quantity: 1};

      if(typeof userid != undefined){
        await Cart.create(cart);

        teste = await sequelize.query(`SELECT carts.id FROM carts WHERE id = (SELECT MAX(id) FROM carts) AND carts.userId = ${req.session.user.id};`,{type: sequelize.QueryTypes.SELECT});
        console.log(teste)

        let cartid = 0
        teste.map(item=>{
          cartid = item.id
        })
        console.log(cartid)

        let bookcart = {bookId: bookid, cartId: cartid}

        console.log(bookcart)

       await BookCart.create(bookcart);
       res.redirect('/');
      }
  },

  async delete(req,res,next){
    let id = req.params.id

    let cart = await BookCart.destroy({where:{cartId:id}})

    console.log(cart)

   res.redirect('/');
  },

}