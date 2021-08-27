module.exports = (sequelize,DataTypes)=>{
  const Card = sequelize.define('Card',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nameCard:{  
      type: DataTypes.STRING,
      allowNull: false
    }, 
    numberCard:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expiration:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvv:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{
    tableName: 'cards'
  });

  return Card;
};