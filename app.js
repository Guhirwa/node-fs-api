const express = require('express');
const fs = require('fs').promises;

const app = express;
app.listen(3000);

app.request(express.json());

const DATA_FILE = './db/data.json';

const readData = async () => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        return JSON.parce(data);
    } catch(error) {
        return [];
    }
}

const writeData = async (data) => {
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}