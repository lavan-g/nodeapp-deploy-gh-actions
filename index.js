import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  return res.json({ message: 'Hello from server' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
