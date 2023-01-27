const beerboxpostsData = require('../data/postsData');

exports.getPosts = function () {
	return beerboxpostsData.getPosts();
};

exports.getPost = function (id) {
	return beerboxpostsData.getPost(id);
};

exports.savePost = function (post) {
	return beerboxpostsData.savePost(post);
};

exports.deletePost = function (id) {
	return beerboxpostsData.deletePost(id);
};

exports.updatePost = function (id, post) {
	return beerboxpostsData.updatePost(id, post);
};
