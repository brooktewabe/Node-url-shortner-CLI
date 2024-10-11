import { input } from '@inquirer/prompts';
import axios from 'axios';
import random from 'random';

async function shortenURL() {

    const url = await input({ message: 'Enter the URL you want to shorten:' });
    const alias = random.int(100, 10000)

    const data = {
        url: url,
        alias: alias,
        password: '', // enter strong password to secure the URL
        'max-clicks': '200'
    };

    try {
        const response = await axios.post('https://spoo.me/', data, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
            },
        });
        console.log('Shortened URL:', response.data.short_url);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

shortenURL();
