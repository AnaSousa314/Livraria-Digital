const { Book } = require("../models");

module.exports = {
  async book(req,res,next){
    
    let product = await Book.findByPk(req.params.id);

    console.log(product);

    res.render('products',{product,user: req.session.user})
  }
}