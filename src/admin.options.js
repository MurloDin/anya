const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose')

const UserAuth = require('./models/users/user.auth');
const PetsOptions = require('./models/pets/pets.options');
const Comment = require('./models/comments/comment.item')

AdminBro.registerAdapter(AdminBroMongoose);

const options = {
    resources: [UserAuth, PetsOptions, Comment],
};


module.exports = options;

