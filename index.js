const fs = require('fs');
const { get } = require('http');
const https = require('https');

const userInput = process.argv[2];

function githubActivity() {
    const url = `https://api.github.com/users/${userInput}/events`;

    const options = {
        headers: {
            'User-Agent': 'node.js',
        }
    };

    https.get(url, options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            if (res.statusCode === 200) {
                const events = JSON.parse(data);
                displayData(events);
            } else {
                console.log(`Error: ${res.statusCode}. UNABLE TO FETCH DATA.`);
            }
        }).on('error', (err) => {
            console.log(`Error: ${err.message}`);
        })
    });
}

