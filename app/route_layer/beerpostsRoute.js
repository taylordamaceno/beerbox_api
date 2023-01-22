const express = require('express');
const router = express.Router();
const beerboxPostsService = require('../service/beerboxPostsService');

router.get('/posts', async function (req, res) {
	const beerboxpost  = await beerboxPostsService.getPosts();
	res.json(posts);
});

router.post('/posts', async function (req, res) {
	const beerboxpost = req.body;
	const beerboxnewPost = await beerboxPostsService.savePost(post);
	res.json(newPost);
});

router.put('/posts/:id', async function (req, res) {
	const beerboxpost = req.body;
	await beerboxPostsService.updatePost(req.params.id, post);
	res.end();
});

router.delete('/posts/:id', async function (req, res) {
	await beerboxPostsService.deletePost(req.params.id);
	res.end();
});

module.exports = router;
