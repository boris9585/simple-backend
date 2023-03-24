import { ChatGPTAPI } from 'chatgpt';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const OPENAI_API_KEY = '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';

app.get('/', (req, res) => res.send('still success'));
app.post('/find', async (req, res) => {
    const api = new ChatGPTAPI({
        apiKey: OPENAI_API_KEY
    });

    try {
        const result = await api.sendMessage(req.body.text);
        res.send(result.text);
    } catch (e) {
        console.log(e);
    }
})

app.listen(port, () => console.log(`Server is running on port: ${port}`));