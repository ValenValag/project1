import express from 'express';

const api = express();
const PORT = process.env.PORT && 3000;


api.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`)
})