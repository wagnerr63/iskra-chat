const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/index');

class Message extends Model {}

Message.init({
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  created_at: { 
    type: Sequelize.DATE,
    allowNull: true,
  },
  updated_at: { 
    type: Sequelize.DATE,
    allowNull: true,
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Message' // We need to choose the model name
});

// the defined model is the class itself
//console.log(User === sequelize.models.User); // true
module.exports = Message;