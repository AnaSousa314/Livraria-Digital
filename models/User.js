module.exports = (sequelize,DataTypes)=>{
  const User = sequelize.define('User',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name:{  
      type: DataTypes.STRING,
      allowNull: false
    }, 
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender:{
      type: DataTypes.STRING,
    },
    infoEmail: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },{
    tableName: 'users'
  });

  User.associate = function(models){
    User.belongsToMany(models.Book,{
      foreignKey: 'bookId', through: 'favorites'
    })
  }

  User.associate = function (models){
    User.hasMany(models.Address,{
      foreignKey: 'userId', as: 'addresses'
    })
    User.hasMany(models.Cart,{foreignKey:''})
  }

  return User;
};