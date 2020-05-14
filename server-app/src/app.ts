import express from 'express';
import cors from 'cors';

import specialistData from './all-data.json';


export const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/specialists', (req, res) => {
    return res.send({ results: specialistData });
});

app.get('*', (req, res) => {
    return res.status(404).send('NOT FOUND');
});

// Start server
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000...');
});
