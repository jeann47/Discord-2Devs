
## Discord 2Devs Bot


### starting

In the project directory, run `yarn` to install all dependencies.

create a .env file and give a bot api key to `BOT_KEY` enviroment var.

### `yarn start`

will run bot.js in a node prompt

### `yarn bot`

will run bot.js in a nodemon prompt


#

When the login succeed, it will console a "I am ready!"

## Deployment

### heroku

Heroku's Procfile sets a worker for this job.
<p/>Follow [Heroku git deploy](https://devcenter.heroku.com/articles/git) guide.
<p/>Then turn web dyno off and start the worker using

`heroku ps:scale web=0`

`heroku ps:scale worker=1`
