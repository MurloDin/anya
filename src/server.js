const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AdminBro = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const Pets = require('./models/pets/pets.item');
const bodyParser = require("body-parser");
const Comment = require('./models/comments/comment.item')



const app = express();
const port = 8000;

const run = async () => {
    await mongoose.connect('mongodb://localhost:27017/petshelter', {
        useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
    });
    const admin = new AdminBro(options);
    const router = buildAdminRouter(admin);

    app.use('/uploads', express.static('uploads'));
    app.use(admin.options.rootPath, router);
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/api/pets', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        Pets.find({}, (err, food) => {
            res.send(food);
        });
    });


    app.post('/api/new-comment', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader("Access-Control-Allow-Origin", "*")
        const values = req.body;
        console.log(values);
        const newComment = new Comment({
            ...values,
        })
        newComment.save();
        res.send('okey')
    })

    app.listen(port, () => console.log(`сервер запущен на http://localhost:${port}`,));
};

module.exports = run;
