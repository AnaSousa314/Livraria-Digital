module.exports = (sequelize,DataTypes)=>{
  const Book = sequelize.define('Book',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title:{  
      type: DataTypes.STRING,
      allowNull: false
    }, 
    imgPath:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    themeId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    most:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },{
    tableName: 'books'
  });

  // Book.associate = function(models){
  //   Book.hasMany(models.Theme,{as: 'theme'})
  // }
  Book.associate = function(models){
      Book.belongsToMany(models.User,{
        foreignKey: 'userId', through: 'favorites',as: 'users'
      });
      Book.belongsTo(models.Theme,{foreignKey:'themeId'/* , as: 'theme' */})
      Book.hasMany(models.Sale);

      Book.belongsToMany(models.Cart,{through:'BookCart',foreignKey:'bookId'})
  }
  
  return Book;
};