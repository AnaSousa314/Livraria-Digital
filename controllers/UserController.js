const valida = require('gerador-validador-cpf');

const {User} = require('../models');
const bcrypt = require('bcrypt');


module.exports = {
  login(req,res,next){
    res.render('login')
  },

  create(req,res,next){
    res.render('cadastro')
  },

  async save(req,res,next){

    if(req.body.password != req.body.confPassword){
      return res.render('cadastro',{validaSenha: false})
    }else{
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

      req.body.confPassword = bcrypt.hashSync(req.body.confPassword, bcrypt.genSaltSync(10));
    }

    let validaCpf = valida.validate(req.body.cpf);
    //console.log(validaCpf)

    /* Verificar como melhorar isso */
    if (validaCpf==false) {
      res.render('cadastro',{valiCpf: false});
    }
    let infoEmail = ''

    if(req.body.infoEmail != undefined){
      infoEmail = "true"
    }else{
      infoEmail = "false"
    }

    let user = {infoEmail, ...req.body};

    await User.create(user)

    console.log(user)
   res.render('cadastro',{added:true});
  },

  async authenticate(req,res,next){
    let {email, password} = req.body;

    let user = await User.findOne({
      where:{email}
    });

    if(!user){
      return res.render('login',{notFound:true});
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.render('login',{notFound:true});
    }

    user.password = undefined;

    req.session.user = user;

    console.log(user)
    res.redirect('/')
  },

  logout(req,res,next){
    req.session.destroy();

    res.redirect('/')
  }
}