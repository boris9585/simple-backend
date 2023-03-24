import { ChatGPTAPI } from 'chatgpt';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const OPENAI_API_KEY = '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';

app.get('/', (req, res) => res.send('success'));

app.listen(port, () => console.log(`Server is running on port: ${port}`));