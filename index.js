const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const id = idGenerator();
const data = {
  posts: []
};
const addPost = post => {
  const newPost = {
    ...post,
    id: id.next().value,
    edited: false,
    upvotes: 0
  };
  data.posts.push(newPost);
};
const deletePost = id => {
  const index = data.posts.findIndex(e => e.id === id);
  if (index >= 0) data.posts.splice(index, 1);
};

app.get('/api/posts', (req, res) => {
  res.json(data.posts);
});

app.post('/api/posts/new', (req, res) => {
  const newPost = req.body;
  addPost(newPost);
  res.json(newPost);
});

app.delete('/api/posts/delete', (req, res) => {
  const { id } = req.body;
  deletePost(id);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  addPost({ title: 'First post', content: 'Testing posts...' });
  addPost({ title: 'Second post', content: 'More testing!' });
});
