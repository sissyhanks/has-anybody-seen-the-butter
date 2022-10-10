const { Sequelize, DataTypes, Model } = require("sequelize");
const Blog = require("./Blog");
const sequelize = require("../config/connection");

class Comment extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    commenter_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "blog",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Comment",
  }
);

module.exports = Comment;
