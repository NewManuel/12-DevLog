const User = require("./User");
const Comment = require("./Comment");
const BlogPost = require("./blogpost");

User.hasMany(BlogPost, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
BlogPost.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
Comment.belongsTo(User, {
    foreignKey: "user_id",
});

BlogPost.hasMany(Comment, {
    foreignKey: "id",
    onDelete: "CASCADE",
});
Comment.belongsTo(BlogPost, {
    foreignKey: "id",
});

module.exports = { User, Comment, BlogPost };
