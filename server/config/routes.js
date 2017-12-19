const UserController = require('../controllers/userController');
const TeamController = require('../controllers/teamController');
const ChanelController = require('../controllers/chanelController');
const MsgController = require('../controllers/msgController');
const CommentController = require('../controllers/commentController');

module.exports = function(app){
    // User Routes
    app.post('/RegisterUser', function(req, res){
        UserController.create(req, res);
    });
    app.post('/LoginUser', function(req, res){
        UserController.login(req, res);
    });
    app.post('/ReadUser', function(req, res){
        UserController.read(req, res);
    });
    app.post('/UpdateUser', function(req, res){
        UserController.update(req, res);
    });
    app.post('/DestroyUser', function(req, res){
        UserController.destroy(req, res);
    });
    app.get('/LogoutUser', function(req, res){
        UserController.logout(req, res);
    });

    // Team Routes
    app.post('/api/team/create', function(req, res){
        TeamController.create(req, res);
    });
    app.post('/api/team/adduser', function(req, res){
        TeamController.addUser(req, res);
    });
    app.get('/api/user/teams', function(req, res){
        TeamController.getUserTeams(req, res);
    });
    app.get('/api/team/:id', function (req, res){
        TeamController.getTeam(req, res);
    });
    app.get('/api/team/:id/destroy', function (req, res){
        TeamController.getTeam(req, res);
    })

    // Channel Routes

    // Message Routes
    app.post('/api/message/create', function (req, res) {
        MsgController.create(req, res);
    });
    app.post('/api/message/:id/update', function (req, res) {
        MsgController.update(req, res);
    });
    app.get('/api/message/:id/destroy', function (req, res) {
        MsgController.destroy(req, res);
    });
    app.get('/api/message/:id', function (req, res) {
        MsgController.getById(req, res);
    });
    app.get('/api/message/search?ch=:_channel', function (req, res) {
        MsgController.getByChannel(req, res);
    });
    app.get('/api/message/search?au=:_author', function (req, res) {
        MsgController.getByAuthor(req, res);
    });
    app.get('/api/message/search?q=:search', function (req, res) {
        MsgController.getBySearchContent(req, res);
    });

    // Comment Routes
    app.post('/api/comment/create', function (req, res) {
        CommentController.create(req, res);
    });
    app.post('/api/comment/:id/update', function (req, res) {
        CommentController.update(req, res);
    });
    app.get('/api/comment/:id/destroy', function (req, res) {
        CommentController.destroy(req, res);
    });
    app.get('/api/comment/:id', function (req, res) {
        CommentController.getById(req, res);
    });
    app.get('/api/comment/search?mg=:_message', function (req, res) {
        CommentController.getByMessage(req, res);
    });
    app.get('/api/comment/search?au=:_author', function (req, res) {
        CommentController.getByAuthor(req, res);
    });
    app.get('/api/comment/search?q=:search', function (req, res) {
        CommentController.getBySearchContent(req, res);
    });


}