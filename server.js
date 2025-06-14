const express = require("express");
const app = express();

app.get('/api/get', (req, res) => {
    res.send({ message: "hello back to node.js" });
});

const PORT = 8000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on port ${PORT}`);
});

