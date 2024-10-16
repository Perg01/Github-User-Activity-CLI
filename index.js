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
                displayEvents(events);
            } else {
                console.log(`Error: ${res.statusCode}. UNABLE TO FETCH DATA.`);
            }
        }).on('error', (err) => {
            console.log(`Error: ${err.message}`);
        })
    });
}

function displayEvents(events) {
    events.forEach(event => {
        if (event.length === 0) {
            return 'No events found.';
        } else {

            events.forEach(event => {
                let message = '';

                switch (event.type) {
                    case 'PushEvent':
                        message = `\x1b[32mPushed ${event.payload.commits.length} commits to ${event.repo.name}`;
                        break;
                    case 'IssuesEvent':
                        message = `\x1b[33mOpened ${event.payload.action} issue in ${event.repo.name}`;
                        break;
                    case 'PullRequestEvent':
                        message = `\x1b[37mOpened ${event.payload.action} pull request in ${event.repo.name}`;
                        break;
                    case 'WatchEvent':
                        message = `\x1b[34mStarred ${event.repo.name}`;
                        break;
                    case 'ForkEvent':
                        message = `\x1b[31mForked ${event.payload.forkee.full_name} from ${event.repo.name}`;
                        break;
                    default:
                        message = `\x1b[35m${event.type} in ${event.repo.name}`;
                }
                console.log('');
                console.log(message);
            });
        }
    });
}

githubActivity();