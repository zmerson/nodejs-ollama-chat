const express = require('express');
const { default: ollama } = require('ollama');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ollama', async (req, res) => {
  console.log('ollama');
  console.log(ollama);
  const response = await ollama.chat({
    model: 'llama2',
    messages: [{ role: 'user', content: 'Why is the sky blue?' }],
  })
  console.log(response.message.content)
  res.send(response);
})


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
