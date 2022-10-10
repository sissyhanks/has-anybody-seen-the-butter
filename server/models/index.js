const Tag = require("./Tag");
const Blog = require("./Blog");
const Comment = require("./Comment");
const User = require("./User");

User.hasMany(Blog, { foreignKey: "blogger_id", onDelete: "CASCADE" });
User.hasMany(Comment, { foreignKey: "commenter_id" });

Blog.belongsTo(User, { foreignKey: "blogger_id" });
Blog.hasMany(Comment, { foreignKey: "blog_id" });

Comment.belongsTo(User, { foreignKey: "commenter_id" });
Comment.belongsTo(Blog, { foreignKey: "blog_id" });

Tag.belongsToMany(Blog, { through: "Blog_Tags" });
Blog.belongsToMany(Tag, { through: "Blog_Tags" });

module.exports = { User, Blog, Comment, Tag };
