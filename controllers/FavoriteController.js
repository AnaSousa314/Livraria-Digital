const {User, sequelize} = require('../models');
const {Book }= require('../models');
const {Favorite} = require('../models');

module.exports = {
 async index(req,res,next){
    const userId = req.params.id;

    //console.log(userId)

    // const favorites = await User.findByPk(userId,{
    //   // include:{
    //   //   association: 'books',
    //   //   attributes: ['title'],
    //   //   through:{
    //   //     attributes: []
    //   //   }
    //   // },
    //   include:'books',
    //   exclude:{
    //     attributes:['createdAt', 'updatedAt']
    //   }
    // })

    //const user = await Favorite.findAll({where:{userId: userId}});

     //console.log(user)

     if(typeof userId != undefined){

       let favorites = await sequelize.query(`SELECT users.name as user, books.title, books.description, books.price, books.imgPath, favorites.id, favorites.bookId FROM users inner join favorites ON (favorites.userId = users.id and users.id = ${userId}) inner join books ON (favorites.bookId = books.id)`, {type: sequelize.QueryTypes.SELECT});
        

      console.log(favorites)
  
    // return res.json(user.books)
  
      res.render('favorites',{user: req.session.user,favorites});

     }

  },

  async create(req,res,next){
    let bookId = req.params.id
    bookId = parseInt(bookId)
    console.log(bookId)

    const userId = req.session.user
    console.log(userId.id);

    let favorite = {userId: userId.id,bookId};

    if(typeof userId != undefined){
      await Favorite.create(favorite);
      res.redirect('/');
    }
  },

  async delete(req,res,next){
    let id = req.params.id
    console.log(id)

    let favorite = await Favorite.findByPk(id);

    favorite.destroy();

    res.redirect('/');
  }
}