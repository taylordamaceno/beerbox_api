const beerpostsData = require('../data/postsData');

exports.getPosts = function () {
	return beerpostsData.getPosts();
};

exports.getPost = function (id) {
	return beerpostsData.getPost(id);
};

exports.savePost = function (post) {
	return beerpostsData.savePost(post);
};

exports.deletePost = function (id) {
	return beerpostsData.deletePost(id);
};

exports.updatePost = function (id, post) {
	return beerpostsData.updatePost(id, post);
};
