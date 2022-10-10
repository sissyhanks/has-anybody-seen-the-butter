const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Tag extends Model {}

Tag.init(
  {
    tag: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,

    modelName: "Tag", // We need to choose the model name
  }
);

module.exports = Tag;
