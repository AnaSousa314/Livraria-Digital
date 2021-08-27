module.exports = (sequelize,DataTypes)=>{
  const Favorite = sequelize.define('Favorite',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId:{
      type: DataTypes.STRING,
      allowNull: false
    },
    bookId:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: 'favorites'
  });

  return Favorite;
};