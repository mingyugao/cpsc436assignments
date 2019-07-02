const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

router.post('/', (req, res) => {
  const post = new Post({ ...req.body, edited: false, upvotes: 0 });
  post.save()
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
});

router.get('/', (req, res) => {
  Post.find((err, posts) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json(posts);
    }
  });
});

router.get('/:id', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json(post);
    }
  });
});

router.put('/:id', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      post.title = req.body.title;
      post.content = req.body.content;
      post.edited = true;
      post.save()
        .then(() => {
          res.sendStatus(200);
        })
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    }
  });
});

router.put('/:id/votes', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      post.upvotes = post.upvotes + 1;
      post.save()
        .then(() => {
          res.sendStatus(200);
        })
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    }
  });
});

router.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id, err => {
    if (err) {
      console.log(err);
    }
    res.sendStatus(200);
  });
});

module.exports = router;
