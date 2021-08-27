module.exports = (sequelize,DataTypes)=>{
  const Sale = sequelize.define('Sale',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    percent:{  
      type: DataTypes.DECIMAL,
      allowNull: false
    }, 
    bookId:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    tableName: 'sales'
  });
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.Book,{foreignKey:'bookId'});
  }

  return Sale;
};