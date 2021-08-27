module.exports = (sequelize,DataTypes)=>{
  const Cart = sequelize.define('Cart',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId:{  
      type: DataTypes.INTEGER,
      allowNull: true,
    }, 
    bookId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    total:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{
    tableName: 'carts'
  });


  Cart.associate = function(models){
    Cart.belongsToMany(models.Book,{through:'BookCart', foreignKey:'cartId'});
    Cart.belongsTo(models.User)
  };

  return Cart;
};