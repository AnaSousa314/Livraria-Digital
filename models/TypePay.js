module.exports = (sequelize,DataTypes)=>{
    const TypePay = sequelize.define('TypePay',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          cardId:{
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          ticketId:{
            type: DataTypes.INTEGER,
            allowNull: true,
          }
    });
    return TypePay;
}