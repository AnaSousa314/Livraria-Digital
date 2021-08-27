const {Book, Sequelize} = require('../models');
const {Theme} = require('../models')

module.exports = {
  async produtos(req,res,next){
    let books = await Book.findAll();
    console.log(books)
    res.render('section',{user: req.session.user,themesAll: true, books});
  },

  async search(req,res,next){
    let {word} = req.query;
    console.log(typeof word);
    let books = await Book.findAll({
      where:{
        title:{[Sequelize.Op.like]: `%${word}%`},
      },
      order: ['id']
    });
    //console.log(books)
    res.render('section',{user: req.session.user,search: true, books, word});
  },

  async theme(req,res,next){

    let id = req.params.id;
    console.log(id)

    let theme = await Book.findAll({
      attributes: ['id','title','imgPath','description','price','themeId'],
      include:[
        {
          model: Theme,
          
          required: true
        }
      ],
      where:{
        themeId: id
      }
    });

    console.log(theme);

    res.render('section',{user: req.session.user,theme: true, theme});
  }
} 