import express from 'express';

const app = express();

app.use(express.json());

const port = process.env.PORT || 6000;

app.get('/', (req, res) => {
  res.send('Welcome to setup NodeJS test tutorial with @AnayoOleru');
});

// get all invalid routes
app.all('*', (req, res) => {
  res.status(404).json({
    error: 'This route does not exist yet!',
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listening on Port ${port}`);
});

export default app;