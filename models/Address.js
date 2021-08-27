module.exports = (sequelize,DataTypes)=>{
  const Address = sequelize.define('Address',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    state:{  
      type: DataTypes.STRING,
      allowNull: false
    }, 
    city:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    street:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    district:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    number:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cep:{
      type: DataTypes.STRING,
      allowNull: false
    },
    complement:{
      type: DataTypes.STRING,
      allowNull: true
    },
    reference:{
      type: DataTypes.STRING,
      allowNull: true
    },
    userId:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: 'addresses'
  });

  Address.associate = function(models){
    Address.belongsTo(models.User,{
      foreignKey: 'userId', as:'user'
    });
  }

  return Address;
};