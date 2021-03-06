const UserController = require('../controllers/userController');
const TeamController = require('../controllers/teamController');
const ChannelController = require('../controllers/channelController');
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
    app.post('/findUser', function(req, res){
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
    app.get('/api/user/initmsgservice', function(req, res) {
        UserController.initMsgService(req, res);
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
    app.post('/api/team/join', function  (req, res){
        TeamController.joinTeam(req, res);
    });
    app.get('/api/team/:id/destroy', function (req, res){
        TeamController.destroyTeam(req, res);
    });
    app.get('/api/team/search/q/:search', function (req, res) {
        TeamController.getBySearchContent(req, res);
    });
    app.get('/api/team/:id', function (req, res) {
        TeamController.getTeam(req, res);
    });
    

    //Channel Routes
    app.post('/api/channel/:id/create', function(req, res){
        ChannelController.create(req, res);
    });
    app.post('/api/channel/updatepurpose', function (req, res){
        ChannelController.updatePurpose(req, res);
    });
    app.post('/api/channel/updatename', function (req, res){
        ChannelController.updateName(req, res);
    });
    app.get('/api/channel/:id/destroy', function (req, res){
        ChannelController.destroyChannel(req, res);
    });
    app.get('/api/team/:id/channels', function (req, res){
        ChannelController.getChannelsByTeam(req, res);
    });
    app.get('/api/channel/search/q/:search', function (req, res) {
        ChannelController.getBySearchContent(req, res);
    });
    app.get('/api/channel/:id', function (req, res) {
        ChannelController.getChannel(req, res);
    });

    // Message Routes
    app.post('/api/message/create', function (req, res) {
        console.log("");
        console.log("**** Inside create route")
        MsgController.create(req, res);
    });
    app.post('/api/message/:id/update', function (req, res) {
        MsgController.update(req, res);
    });
    app.get('/api/message/:id/destroy', function (req, res) {
        MsgController.destroy(req, res);
    });
    app.get('/api/message/search/ch/:_channel', function (req, res) {
        console.log("")
        console.log("***** Inside message search by channel route")
        MsgController.getByChannel(req, res);
    });
    app.get('/api/message/search/au/:_author', function (req, res) {
        MsgController.getByAuthor(req, res);
    });
    app.get('/api/message/search/q/:search', function (req, res) {
        MsgController.getBySearchContent(req, res);
    });
    app.get('/api/message/:id', function (req, res) {
        console.log("")
        console.log("***** Inside message id route")
        MsgController.getById(req, res);
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