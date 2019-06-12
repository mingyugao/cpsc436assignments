const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'client/build')));

const data = {
  posts: [
    { id: 1, title: 'First post', content: 'Testing posts...', edited: false, upvotes: 0 },
    { id: 2, title: 'Second post', content: 'More testing!', edited: true, upvotes: 1 }
  ]
};

app.get('/api/posts', (req, res) => {
  res.json(data.posts);
});

app.post('/api/posts/new', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
