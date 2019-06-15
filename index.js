const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

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

const getPost = id => {
  const index = data.posts.findIndex(e => e.id === id);
  if (index >= 0 && index < data.posts.length) {
    return data.posts[index];
  }
  return null;
};

const createPost = post => {
  const newPost = {
    ...post,
    id: id.next().value,
    edited: false,
    upvotes: 0
  };
  data.posts.push(newPost);
};

const editPost = (id, title, content) => {
  const index = data.posts.findIndex(e => e.id === id);
  if (index >= 0 && index < data.posts.length) {
    data.posts[index].title = title;
    data.posts[index].content = content;
    data.posts[index].edited = true;
    return true;
  }
  return false;
};

const deletePost = id => {
  const index = data.posts.findIndex(e => e.id === id);
  if (index >= 0) data.posts.splice(index, 1);
};

app.get('/posts', (req, res) => {
  res.json(data.posts);
});

app.post('/posts', (req, res) => {
  const newPost = req.body;
  createPost(newPost);
  res.status(201).json(newPost);
});

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const post = getPost(Number(id));
  if (post) {
    res.json(post)
  } else {
    res.sendStatus(404);
  }
});

app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const response = editPost(Number(id), title, content);
  if (response) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  deletePost(Number(id));
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  createPost({ title: 'First post', content: 'Testing posts...' });
  createPost({ title: 'Second post', content: 'More testing!' });
});
