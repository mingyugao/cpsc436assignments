const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const postsRouter = require('./routes/posts');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/posts', postsRouter);

const dbname = 'cpsc436assignment';
const url = 'mongodb+srv://dbUser:dbUserPassword@cluster0-xkedn.mongodb.net/test?retryWrites=true&w=majority';
try {
  mongoose.connect(`${url}/${dbname}`, { useNewUrlParser: true });
} catch (err) {
  console.log(err);
}
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected successfully to database server.');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
