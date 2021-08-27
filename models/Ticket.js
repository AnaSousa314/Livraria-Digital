module.exports = (sequelize,DataTypes)=>{
    const Ticket = sequelize.define('Ticket',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {model:'users',key:'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
    },{
        tableName: 'Ticket'
    });
    
    Ticket.associate = (models) => {
        Ticket.belongsTo(models.Card, {as: 'cards'})
      }

      return Ticket;
    }