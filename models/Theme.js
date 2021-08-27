module.exports = (sequelize,DataTypes)=>{
  const Theme = sequelize.define('Theme',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    imgPaths:{
      allowNull: false,
      type: DataTypes.STRING
    },
    theme:{  
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: 'themes'
  });

  Theme.associate = function(models){
    Theme.hasMany(models.Book);
  }

  return Theme;
};