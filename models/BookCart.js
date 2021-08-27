module.exports = (sequelize,DataTypes)=>{
  const BookCart = sequelize.define('BookCart',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bookId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cartId:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    tableName: 'bookcarts'
  });


  BookCart.associate = function(models){
    BookCart.belongsTo(models.Cart,{foreignKey:'cartId'});

    BookCart.belongsTo(models.Book,{foreignKey:'bookId'});
  }

  return BookCart;
};